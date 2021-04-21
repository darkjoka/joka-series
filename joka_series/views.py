from django.shortcuts import render
import requests
from bs4 import BeautifulSoup
from requests.compat import quote_plus

# Create your views here.

# base urls
baseUrl = "http://www.todaytvseries2.com/"
baseeUrl = "http://www.todaytvseries2.com/tv-series/"


def index(request):
    res = requests.get(baseUrl)
    soup = BeautifulSoup(res.content, "html.parser")
    hero = soup.find(class_="uk-width-large-2-3")
    heroImage = hero.find("img").get("src")
    heroImage = baseUrl + heroImage
    heroLink = hero.find("a").get("href").split("/")[-1]

    outer = soup.find(class_="uk-grid-width-1-1")
    series = outer.find_all(class_="uk-text-center")
    seriesTitle = [title.find("a").get("title") for title in series]
    seriesLink = [link.find("a").get("href").split("/")[-1] for link in series]
    seriesImage = [baseUrl + image.find("img").get("src") for image in series]
    series = zip(seriesTitle, seriesLink, seriesImage)

    context = {"heroImage": heroImage, "heroLink": heroLink, "series": series}

    return render(request, "joka_series/index.html", context)


def popular(request):
    addUrl = "tv-series"
    finalUrl = baseUrl + addUrl
    res = requests.get(finalUrl)
    soup = BeautifulSoup(res.content, "html.parser")
    series = soup.find_all(class_="nspArt")
    seriesLink = [link.find("a").get("href").split("/")[-1] for link in series]
    seriesImage = [baseUrl + link.find("img").get("src") for link in series]
    series = zip(seriesLink, seriesImage)

    context = {"series": series}

    return render(request, "joka_series/popular.html", context)


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
    res = requests.get(finalUrl)
    soup = BeautifulSoup(res.content, "html.parser")
    hero = soup.find(class_="imageseries1")
    heroImage = hero.find("img").get("src")
    heroImage = baseUrl + heroImage
    title = soup.find("h1", attrs={"class": "uk-badge1"}).get_text()

    desc = soup.find(class_="content2")
    allPara = desc.find_all("p", attrs={"class": ""})
    seriesDesc = [
        para.get_text()
        for para in allPara
        if not (
            para.get_text().startswith("Download")
            or para.get_text().startswith("We try our best")
            or para.get_text().startswith("Note")
        )
    ]

    info = soup.find(class_="footer").find_all(class_="cell1")
    Genre, Language, resolution = [i.get_text() for i in info[0:3]]
    seasons = soup.find_all(class_="uk-accordion-title")
    episodes = soup.find_all(class_="uk-accordion-content")
    seasondict = {}

    for season, episode in zip(seasons, episodes):
        epdict = {}
        baseEp = episode.find(class_="uk-margin")
        eps = baseEp.find_all(class_="cell2")
        sizes = baseEp.find_all(class_="cell3")
        links = baseEp.find_all(class_="cell4")
        for ep, size, link in zip(eps, sizes, links):
            epdict[ep.get_text()] = [
                ep.get_text(),
                size.get_text(),
                link.find("a").get("href"),
            ]
        seasondict[season.get_text()] = epdict

    context = {
        "heroImage": heroImage,
        "title": title,
        "seriesDesc": seriesDesc,
        "genre": Genre,
        "resolution": resolution,
        "season": seasondict,
    }

    return render(request, "joka_series/detail.html", context)
