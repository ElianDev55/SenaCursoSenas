from django.urls import path
from apps.videos.api.views.VideoView import VideoViewCreate, VideoReadUpdateDelete 

urlpatterns = [
    path('video/', VideoViewCreate.as_view(), name='user'),
]