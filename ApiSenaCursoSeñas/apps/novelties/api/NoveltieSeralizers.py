from apps.novelties.models import Novelty
from rest_framework import serializers

class NoveltieSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Novelty
        fields = '__all__'