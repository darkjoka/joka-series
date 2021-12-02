from bs4 import BeautifulSoup
from bs4.element import ResultSet
from requests.models import Response
from typing import Dict, List, Set
import os
import requests

movieType = Dict[str, str]
seasonEpisodeType = Dict[str, Dict[str, List[Dict[str, str]]]]

baseUrl = "http://www.todaytvseries2.com/"


def getFromIndex(pageLink: str):
    mime: Response = requests.get(pageLink)
    soup: BeautifulSoup = BeautifulSoup(mime.content, "html.parser")
    articles: ResultSet = soup.find_all(class_="uk-article")

    series: List[movieType] = []
    try:
        gallery: Set[str] = os.listdir("gallery")
    except FileNotFoundError:
        gallery = set()

    for article in articles:
        title: str = article.find(class_="uk-article-title1").get_text().strip()
        permaLink: str = article.get("data-permalink")
        imageSource: str = article.find("img").get("src")
        lastEpisode: str = article.find("time").get("datetime")
        rating: str = article.find(class_="current-rating").get_text().strip()
        teaser: str = article.find(class_="teasershort").get_text().strip()

        imageSource = getImage(imageSource, gallery)

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


def getTrailers():
    mime: Response = requests.get("http://www.todaytvseries2.com/tvshow-trailers")
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
        soup.find(class_="footer").find(class_="cell1").get_text().split(" | ")
    )

    seasonHeads: ResultSet = soup.find_all(class_="uk-accordion-title")
    episodeHeads: ResultSet = soup.find_all(class_="uk-accordion-content")

    seasonEpisodes: List[seasonEpisodeType] = []

    try:
        gallery: Set[str] = os.listdir("gallery")
    except FileNotFoundError:
        gallery = set()

    heroImage = getImage(heroImage, gallery)

    for seasonHead, episodeHead in zip(seasonHeads, episodeHeads):
        head: str = seasonHead.get_text().strip()
        episodes: ResultSet = episodeHead.find_all(class_="footer")
        seasonEpisode: seasonEpisodeType = {"season": head, "episodes": []}

        for episode in episodes:
            episodeTitle: str = episode.find(class_="cell2").get_text().strip()
            episodeSize: str = episode.find(class_="cell3").get_text()
            epidoseDownloadLink: str = (
                episode.find(class_="cell4").find("a").get("href")
            )

            seasonEpisode["episodes"].append(
                {
                    "episodeTitle": episodeTitle,
                    "episodeSize": episodeSize,
                    "episodeDownloadLink": epidoseDownloadLink,
                }
            )

        seasonEpisodes.append(seasonEpisode)

    detail = {
        "heroImage": heroImage,
        "title": title,
        "description": description,
        "genres": genres,
        "seasonEpisodes": seasonEpisodes,
    }

    return detail


def getFilteredSearch(pageLink: str):
    mime: Response = requests.get(pageLink)
    soup: BeautifulSoup = BeautifulSoup(mime.content, "html.parser")

    articles: ResultSet = soup.find_all("article")

    series: List[movieType] = []

    for article in articles:
        titleGroup = article.find(class_="uk-article-titletag")

        title: str = titleGroup.get_text().strip()
        permaLink: str = titleGroup.find("a").get("href").strip()

        imageSource: str = article.find("img").get("src").strip()

        movie: movieType = {
            "title": title,
            "permaLink": permaLink,
            "imageSource": imageSource,
        }

        series.append(movie)

    return series


def getSearchResult(permaLink: str):
    mime: Response = requests.get(permaLink)
    soup: BeautifulSoup = BeautifulSoup(mime.content, "html.parser")

    articles: ResultSet = soup.find_all("article")

    searchResults: List[movieType] = []

    for article in articles:
        title: str = article.get_text().strip()
        permaLink: str = article.find("a").get("href")

        searchResults.append({"title": title, "permaLink": permaLink})

    return searchResults


def getImage(link: str, dir: Set[str]) -> str:
    os.makedirs("gallery", exist_ok=True)

    link = link.split("/")[-1]

    if link in dir:
        return f"image/{link}"

    mime: Response = requests.get(f"{baseUrl}/{link}")
    with open(f"gallery/{link}", "wb") as file:
        for chunk in mime.iter_content(100000):
            file.write(chunk)
    return f"image/{link}"
