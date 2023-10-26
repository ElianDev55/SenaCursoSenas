from apps.CollaborationQuestions.api.QuestionSeralizers import Questionerializer
from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response


class QuestionViewSet(viewsets.ModelViewSet):
    serializer_class = Questionerializer
    queryset =  Questionerializer.Meta.model.objects.all()

class QuestionViewCreate(generics.ListCreateAPIView):
    pass

class QuestionReadUpdateDelete (generics.RetrieveUpdateDestroyAPIView):
    pass