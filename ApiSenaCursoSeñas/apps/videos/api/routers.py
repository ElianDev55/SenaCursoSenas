from rest_framework.routers import DefaultRouter
from apps.videos.api.views.VideoView import VideoViewSet

router = DefaultRouter()

router.register(r'videos', VideoViewSet, basename='videos')

urlpatterns = router.urls