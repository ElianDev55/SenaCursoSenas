from django.urls import path
from .views.RoleView import RoleViewCreate,RoleReadUpdateDelete 
from .views.UserView import UserViewCreate,UserReadUpdateDelete

urlpatterns = [
    path('user/', UserViewCreate.as_view(), name='user'),
    path('user/<int:pk>', UserReadUpdateDelete .as_view(), name='user'),
    #--------------------------------------------
    path('role/', RoleViewCreate.as_view(), name='role'),
    path('role/<int:pk>', RoleReadUpdateDelete .as_view(), name='role'),
]