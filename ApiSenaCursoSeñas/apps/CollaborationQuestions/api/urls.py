from django.urls import path
from apps.CollaborationQuestions.api.views.QuestionView import QuestionViewSet

urlpatterns = [
    path('CollaborationQuestions/', QuestionViewSet.as_view(), name='CollaborationQuestions'),
]