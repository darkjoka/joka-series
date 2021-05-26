from typing import Dict, List
from bs4 import BeautifulSoup
import requests


movieType = Dict[str, str]


def getFromIndex(pageLink: str):
    mime = requests.get(pageLink)
    soup: BeautifulSoup = BeautifulSoup(mime.content, "html.parser")
    articles = soup.find_all(class_="uk-article")

    series: List[movieType] = []

    for article in articles:
        title: str = article.find(class_="uk-article-title1").get_text().strip()
        permaLink: str = article.get("data-permalink")
        imageSource: str = article.find("img").get("src")
        lastEpisode: str = article.find("time").get("datetime")
        rating: str = article.find(class_="current-rating").get_text().strip()
        teaser: str = article.find(class_="teasershort").get_text().strip()

        movie: movieType = {
            "title": title,
            "permaLink": permaLink,
            "imageSource": imageSource,
            "lastEpisode": lastEpisode,
            "rating": rating,
            "teaser": teaser,
        }

        series.append(movie)

    return series


def getTrailers(pageLink: str):
    mime = requests.get(pageLink)
    soup: BeautifulSoup = BeautifulSoup(mime.content, "html.parser")
    articles = soup.find_all(class_="jux-item")

    series: List[movieType] = []

    for article in articles:
        classes: List[str] = article.get("class")
        production: str = classes[4] if len(classes) > 4 else ""

        titleGroup = article.find(class_="jux-title")
        [permaLink, title] = [
            titleGroup.find("a").get("href").strip(),
            titleGroup.get_text().strip(),
        ]

        thumbNailSource: str = article.find("img").get("src").strip()
        videoSource: str = article.find("iframe").get("src").strip()

        movie: movieType = {
            "title": title,
            "permaLink": permaLink,
            "thumbNailSource": thumbNailSource,
            "videoSource": videoSource,
            "production": production,
        }

        series.append(movie)

    return series
