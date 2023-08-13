from rest_framework.routers import DefaultRouter

from apps.users.api.views.RoleView import RoleViewSet
from apps.users.api.views.UserView import UserViewSet

router = DefaultRouter()

router.register(r'users', UserViewSet, basename='user')
router.register(r'roles', RoleViewSet, basename='role')

urlpatterns = router.urls