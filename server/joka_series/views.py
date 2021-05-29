from typing import Dict, List, Union
from django.shortcuts import render
import requests
from bs4 import BeautifulSoup
from requests.compat import quote_plus
from django.http import JsonResponse

from scraper import scrapers  # type: ignore


# base urls
baseUrl = "http://www.todaytvseries2.com/"
baseeUrl = "http://www.todaytvseries2.com/tv-series/"


def index(request):
    result: List[Dict[str, str]] = scrapers.getFromIndex(baseeUrl)
    return JsonResponse({"data": result})


def search(request):
    searchTerm = request.POST.get("search")
    addUrl = (
        f"search-series?searchword={quote_plus(searchTerm)}&searchphrase=all&limit=0"
    )
    finalUrl = baseUrl + addUrl
    res = requests.get(finalUrl)
    soup = BeautifulSoup(res.content, "html.parser")

    outer = soup.find(class_="tm-content")
    series = outer.find_all(class_="content2")
    seriesTitle = [title.find("a").get("title") for title in series]
    seriesLink = [link.find("a").get("href").split("/")[-1] for link in series]
    series = zip(seriesTitle, seriesLink)
    state = True if len(seriesLink) != 0 else False

    context = {
        "searchTerm": searchTerm,
        "series": series,
        "state": state,
    }
    return render(request, "joka_series/search.html", context)


def detail(request, series):
    finalUrl = baseeUrl + series
    result: Dict[str, Union(str, list)] = scrapers.getDetails(finalUrl)
    return JsonResponse({"data": result})
