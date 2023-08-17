from rest_framework.routers import DefaultRouter
from apps.Comment.api.views.CommentView import CommentViewSet


router = DefaultRouter()

router.register(r'comment', CommentViewSet, basename='comment')

urlpatterns = router.urls