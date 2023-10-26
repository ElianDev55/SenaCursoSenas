from apps.CollaborationAnswer.models import CollaborationAnswer
from rest_framework import serializers

class AnswerSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CollaborationAnswer
        fields = '__all__'