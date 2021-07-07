from typing import Dict, List, Union
import json

from requests.compat import quote_plus
from django.http import JsonResponse

from . import scrapers

# base urls
baseUrl = "http://www.todaytvseries2.com/"
baseeUrl = "http://www.todaytvseries2.com/tv-series/"


def index(request):
    result: List[Dict[str, str]] = scrapers.getFromIndex(baseeUrl)
    return JsonResponse({"data": result}, json_dumps_params={"indent": 2})


def search(request, searchTerm):
    addUrl = (
        f"search-series?searchword={quote_plus(searchTerm)}&searchphrase=all&limit=0"
    )
    finalUrl = baseUrl + addUrl
    result: List[Dict[str, str]] = scrapers.getSearchResult(finalUrl)
    return JsonResponse({"data": result}, json_dumps_params={"indent": 2})


def detail(request, series):
    finalUrl = baseeUrl + series
    result: Dict[str, Union(str, list)] = scrapers.getDetails(finalUrl)
    return JsonResponse({"data": result}, json_dumps_params={"indent": 2})


def trailers(request):
    result = scrapers.getTrailers()
    return JsonResponse({"data": result}, json_dumps_params={"indent": 2})


def filter(request, type):
    addUrl = (
        f"tv-series-started-in-{type}"
        if type.isnumeric()
        else f"tv-series-{type}-genre"
    )
    finalUrl = baseUrl + addUrl
    print(finalUrl)
    result = scrapers.getFilteredSearch(finalUrl)
    return JsonResponse({"data": result}, json_dumps_params={"indent": 2})