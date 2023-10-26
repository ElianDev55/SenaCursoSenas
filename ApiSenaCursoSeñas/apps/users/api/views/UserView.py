from apps.users.models import User
from rest_framework import generics
from apps.users.api.UserSeralizers import UserSerializer
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = UserSerializer.Meta.model.objects.all()


class UserViewCreate(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    
    queryset = UserSerializer.Meta.model.objects.all()
    
    
    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message':'User creado correctamente'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class UserReadUpdateDelete (generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    
    
    def get_queryset(self, pk=None):
        if pk is None:
            return self.serializer_class.Meta.model.objects.all()
        else:
            return self.serializer_class.Meta.model.objects.filter(id=pk, state=True).first()

    
    
    def patch(self, request, pk=None):
        user = self.get_queryset().filter(id=pk, state=True).first()
        if user:
            serializer = self.serializer_class(user, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'message': 'No existe el usuario'}, status=status.HTTP_404_NOT_FOUND)


    def update(self, request, pk=None):
        user = self.get_queryset().filter(id=pk).first()
        if user:
            serializer = self.serializer_class(user, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'message': 'No existe el usuario'}, status=status.HTTP_404_NOT_FOUND)


    def destroy(self, request, pk=None):
        role = self.get_queryset().filter(id=pk).first()
        if role:
            role.delete()
            return Response({'message': 'User eliminado correctamente'}, status=status.HTTP_204_NO_CONTENT)
        return Response({'message': 'No existe el User'}, status=status.HTTP_404_NOT_FOUND)