from typing import Dict, List
from bs4 import BeautifulSoup
import requests


movieType = Dict[str, str]


def getFromIndex(pageLink: str):
    mime = requests.get(pageLink)
    soup = BeautifulSoup(mime.content, "html.parser")
    articles = soup.find_all(class_="uk-article")

    series: List[movieType] = []

    for article in articles:
        title: str = article.find(class_="uk-article-title1").get_text().strip()
        permaLink: str = article.get("data-permalink")
        imageSrc: str = article.find("img").get("src")
        lastEpisode: str = article.find("time").get("datetime")
        rating: str = article.find(class_="current-rating").get_text().strip()
        teaser: str = article.find(class_="teasershort").get_text().strip()

        movie: movieType = {
            "title": title,
            "permaLink": permaLink,
            "lastEpisode": lastEpisode,
            "rating": rating,
            "teaser": teaser,
        }

        series.append(movie)

    return series