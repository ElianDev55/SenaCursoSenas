from apps.videos.models import Video
from rest_framework import serializers

class VideoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Video
        fields = '__all__'


class CategoryVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = [
            "video",
            "title",
            "description",
            "state",
            "miniature",
            "created_at",
            "updated_at",
            "idUser",
            "idCategory"
        ]