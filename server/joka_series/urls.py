from django.urls import path
from . import views

app_name = "joka_series"

urlpatterns = [
    path("", views.index, name="index"),
    path("search/<str:searchTerm>", views.search, name="search"),
    path("detail/<str:series>/", views.detail, name="detail"),
    path("trailers/", views.trailers, name="trailers"),
    path("filter/<str:type>", views.filter, name="filter"),
]