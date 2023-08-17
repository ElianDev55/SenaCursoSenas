from rest_framework.routers import DefaultRouter
from apps.Discussion.api.views.DiscussionView import DiscussionViewSet


router = DefaultRouter()

router.register(r'discussion', DiscussionViewSet, basename='discussion')

urlpatterns = router.urls