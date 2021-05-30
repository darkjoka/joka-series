from typing import Dict, List, Union

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
    result: List[Dict[str, str]] = scrapers.getSearchResults(finalUrl)
    return JsonResponse({"data": result})


def detail(request, series):
    finalUrl = baseeUrl + series
    result: Dict[str, Union(str, list)] = scrapers.getDetails(finalUrl)
    return JsonResponse({"data": result})
