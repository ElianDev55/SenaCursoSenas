from django.urls import path
from apps.CollaborationAnswer.api.views.AswerView import AnswerViewSet

urlpatterns = [
    path('CollaborationAnswer/', AnswerViewSet.as_view(), name='CollaborationAnswer'),
]