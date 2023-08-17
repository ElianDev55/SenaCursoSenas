from rest_framework.routers import DefaultRouter
from apps.novelties.api.views.NoveliteView import NoveltieViewSet


router = DefaultRouter()

router.register(r'novelties', NoveltieViewSet, basename='novelties')

urlpatterns = router.urls