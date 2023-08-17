from apps.Discussion.models import Discussion
from rest_framework import serializers

class DiscussionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Discussion
        fields = '__all__'