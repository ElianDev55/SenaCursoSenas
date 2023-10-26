from django.urls import path
from apps.Discussion.api.views.DiscussionView import DiscussionViewSet

urlpatterns = [
    path('Discussion/', DiscussionViewSet.as_view(), name='novelties'),
]