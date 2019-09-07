from django.urls import path

from .views import ListJournal, DetailJournal

urlpatterns = [
    path('<int:pk>/', DetailJournal.as_view()),
    path('', ListJournal.as_view()),
]