from django.urls import path
from . import views

app_name = 'joka_series'

urlpatterns = [
    path('', views.index, name = 'index'),
    path('popular/' ,views.popular, name ='popular'),
    path('search/', views.search , name = 'search'),
    path('detail/<str:series>/',views.detail, name='detail'),
]