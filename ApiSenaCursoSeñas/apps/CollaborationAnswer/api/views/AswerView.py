from apps.CollaborationAnswer.api.AnswerSeralizers import AnswerSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response


class AnswerViewSet(viewsets.ModelViewSet):
    serializer_class = AnswerSerializer
    queryset =  AnswerSerializer.Meta.model.objects.all()

class AnswerViewCreate(generics.ListCreateAPIView):
    pass

class AnswerReadUpdateDelete (generics.RetrieveUpdateDestroyAPIView):
    pass