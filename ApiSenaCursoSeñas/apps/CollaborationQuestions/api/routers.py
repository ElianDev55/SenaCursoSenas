from rest_framework.routers import DefaultRouter
from apps.CollaborationQuestions.api.views.QuestionView import QuestionViewSet


router = DefaultRouter()

router.register(r'CollaborationQuestions', QuestionViewSet, basename='CollaborationQuestions')

urlpatterns = router.urls