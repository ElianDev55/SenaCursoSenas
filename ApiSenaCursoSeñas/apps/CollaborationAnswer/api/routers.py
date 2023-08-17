from rest_framework.routers import DefaultRouter
from apps.CollaborationAnswer.api.views.AswerView import AnswerViewSet


router = DefaultRouter()

router.register(r'CollaborationAnswer', AnswerViewSet, basename='CollaborationAnswer')

urlpatterns = router.urls