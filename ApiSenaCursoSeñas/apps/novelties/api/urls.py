from django.urls import path
from apps.novelties.api.views.NoveliteView import NoveltieViewSet

urlpatterns = [
    path('Novelties/', NoveltieViewSet.as_view(), name='novelties'),
]