from typing import Dict, List
from bs4 import BeautifulSoup
import requests


movie = Dict[str, str]


def getFromIndex(pageLink: str):
    mime = requests.get(pageLink)
    soup = BeautifulSoup(mime.content, "html.parser")
    articles = soup.find_all(class_="uk-article")

    series: List[movie] = []
