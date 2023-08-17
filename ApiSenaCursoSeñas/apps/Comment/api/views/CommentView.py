from apps.Comment.api.CommentSeralizers import CommentSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response


class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset =  CommentSerializer.Meta.model.objects.all()

class CommentViewCreate(generics.ListCreateAPIView):
    pass

class CommentReadUpdateDelete (generics.RetrieveUpdateDestroyAPIView):
    pass