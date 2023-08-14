from rest_framework.routers import DefaultRouter
from apps.categories.api.views.CategoryView import CategoryViewSet


router = DefaultRouter()

router.register(r'categories', CategoryViewSet, basename='categories')

urlpatterns = router.urls