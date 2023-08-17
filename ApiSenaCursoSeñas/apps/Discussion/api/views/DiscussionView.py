from apps.Discussion.api.DiscussionSeralizers import DiscussionSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response


class DiscussionViewSet(viewsets.ModelViewSet):
    serializer_class = DiscussionSerializer
    queryset =  DiscussionSerializer.Meta.model.objects.all()

class DiscussionViewCreate(generics.ListCreateAPIView):
    pass

class DiscussionReadUpdateDelete (generics.RetrieveUpdateDestroyAPIView):
    pass