from django.urls import path
from apps.Comment.api.views.CommentView import CommentViewSet

urlpatterns = [
    path('Comment/', CommentViewSet.as_view(), name='Comment'),
]