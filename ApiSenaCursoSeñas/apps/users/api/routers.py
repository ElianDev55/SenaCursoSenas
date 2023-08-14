from rest_framework.routers import DefaultRouter

from apps.users.api.views.RoleView import RoleViewSet
from apps.users.api.views.UserView import UserViewSet
from apps.categories.api.views.CategoryView import CategoryViewSet
from apps.videos.api.views.VideoView import VideoViewSet

router = DefaultRouter()

router.register(r'users', UserViewSet, basename='user')
router.register(r'roles', RoleViewSet, basename='role')
router.register(r'categories', CategoryViewSet, basename='categories')
router.register(r'videos', VideoViewSet, basename='videos')

urlpatterns = router.urls