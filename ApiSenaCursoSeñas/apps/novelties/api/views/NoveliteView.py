from apps.novelties.api.NoveltieSeralizers import NoveltieSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response


class NoveltieViewSet(viewsets.ModelViewSet):
    serializer_class = NoveltieSerializer
    queryset =  NoveltieSerializer.Meta.model.objects.all()

class NoveltieViewCreate(generics.ListCreateAPIView):
    pass

class NoveltieReadUpdateDelete (generics.RetrieveUpdateDestroyAPIView):
    pass