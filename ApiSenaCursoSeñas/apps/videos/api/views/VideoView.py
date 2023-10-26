from apps.videos.models import Video
from apps.videos.api.VideoSeralizers import VideoSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action


class VideoViewSet(viewsets.ModelViewSet):
    serializer_class = VideoSerializer
    queryset = VideoSerializer.Meta.model.objects.filter(state=True)
    
    