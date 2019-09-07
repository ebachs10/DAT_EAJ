from rest_framework import serializers
from .models import Journal

class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Journal
        fields = (
            'id', 
            'AnimalType', 
            'TagNumber', 
            'disease',
            'note',
            'created_at', 
            'updated_at', 
            'author', 
            'TreatmentStatus', 
            'Location',
            ) 