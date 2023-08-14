from django.urls import path
from apps.categories.api.views.CategoryView import  CategoryCreate , CategoryReadUpdateDelete

urlpatterns = [
    path('category/',  CategoryCreate.as_view(), name='category'),
    path('category/<int:pk>/',  CategoryReadUpdateDelete.as_view(), name='category'),
]