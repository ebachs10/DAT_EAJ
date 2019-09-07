from rest_framework import generics

from .models import Journal
from .serializers import JournalSerializer

class ListJournal(generics.ListAPIView):
    queryset = Journal.objects.all()
    serializer_class = JournalSerializer

class DetailJournal(generics.RetrieveAPIView):
    queryset = Journal.objects.all()
    serializer_class = JournalSerializer