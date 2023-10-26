from apps.CollaborationQuestions.models import CollaborationQuestions
from rest_framework import serializers

class Questionerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CollaborationQuestions
        fields = '__all__'