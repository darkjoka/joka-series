from typing import Dict, List, Union
from bs4 import BeautifulSoup
from bs4.element import ResultSet
import requests
from requests.models import Response


movieType = Dict[str, str]
seasonEpisodeType = Dict[str, Dict[str, List[Dict[str, str]]]]
stringOrList = Union(str, list)


def getFromIndex(pageLink: str):
    mime: Response = requests.get(pageLink)
    soup: BeautifulSoup = BeautifulSoup(mime.content, "html.parser")
    articles: ResultSet = soup.find_all(class_="uk-article")

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
    mime: Response = requests.get(pageLink)
    soup: BeautifulSoup = BeautifulSoup(mime.content, "html.parser")
    articles: ResultSet = soup.find_all(class_="jux-item")

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


def getDetails(pageLink: str):
    mime = requests.get(pageLink)
    soup: BeautifulSoup = BeautifulSoup(mime.content, "html.parser")

    heroImage: str = soup.find(class_="imageseries1").find("img").get("src")
    title: str = soup.find("h1", attrs={"class": "uk-badge1"}).get_text().strip()
    description: str = soup.find("meta", attrs={"property": "og:description"}).get(
        "content"
    )

    genres: List[str] = (
        soup.find(class_="footer").find(class_="cell1").get_text().strip(" | ")
    )

    seasonHeads: ResultSet = soup.find_all(class_="uk-accordion-title")
    episodeHeads: ResultSet = soup.find_all(class_="uk-accordion-content")

    seasonEpisodes: List[seasonEpisodeType] = []

    for seasonHead, episodeHead in zip(seasonHeads, episodeHeads):
        head: str = seasonHead.get_text().strip()
        episodes: ResultSet = episodeHead.find_all(class_="footer")
        seasonEpisode: seasonEpisodeType = {head: {"episodes": []}}

        for episode in episodes:
            episodeTitle: str = episode.find(class_="cell2").get_text().stip()
            episodeSize: str = episode.find(class_="cell3").get_text()
            epidoseDownloadLink: str = (
                episode.find(class_="cell4").find("a").get("href")
            )

            seasonEpisode[head]["episode"].append(
                {
                    "episodeTitle": episodeTitle,
                    "episodeSize": episodeSize,
                    "episodeDownloadLink": epidoseDownloadLink,
                }
            )

        seasonEpisodes.append(seasonEpisode)

    return seasonEpisodes


def getFilteredSearch(pageLink: str):
    mime: Response = requests.get(pageLink)
    soup: BeautifulSoup = BeautifulSoup(mime.content, "html.parser")

    articles: ResultSet = soup.find_all("article")

    series: List[movieType] = []

    for article in articles:
        titleGroup = article.find(class_="uk-article-titletag")

        title: str = titleGroup.find_text().strip()
        permaLink: str = titleGroup.find("a").get("href").strip()

        imageSource: str = article.find("img").get("src").strip()

        movie: movieType = {
            "title": title,
            "permaLink": permaLink,
            "imageSource": imageSource,
        }

        series.append(movie)

    return series