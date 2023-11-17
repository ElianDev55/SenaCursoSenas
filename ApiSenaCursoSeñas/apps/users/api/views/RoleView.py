from apps.users.models import Role
from apps.users.api.RoleSeralizers import RoleSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response


class RoleViewSet(viewsets.ModelViewSet):
    serializer_class = RoleSerializer
    queryset = RoleSerializer.Meta.model.objects.all()

class RoleViewCreate(generics.ListCreateAPIView):
    serializer_class = RoleSerializer
    
    queryset = RoleSerializer.Meta.model.objects.filter(state=True)
    
    
    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message':'Rol creado correctamente'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class RoleReadUpdateDelete (generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RoleSerializer
    
    
    def get_queryset(self, pk=None):
        if pk is None:
            return self.serializer_class.Meta.model.objects.all()
        else:
            return self.serializer_class.Meta.model.objects.filter(id=pk, state=True).first()

    
    
    def patch(self, request, pk=None):
        role = self.get_queryset().filter(id=pk).first()
        if role:
            serializer = self.serializer_class(role, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'message': 'No existe el rol'}, status=status.HTTP_404_NOT_FOUND)


    def update(self, request, pk=None):
        role = self.get_queryset().filter(id=pk).first()
        if role:
            serializer = self.serializer_class(role, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'message': 'No existe el rol'}, status=status.HTTP_404_NOT_FOUND)


    def destroy(self, request, pk=None):
        role = self.get_queryset().filter(id=pk).first()
        if role:
            role.delete()
            return Response({'message': 'Rol eliminado correctamente'}, status=status.HTTP_204_NO_CONTENT)
        return Response({'message': 'No existe el rol'}, status=status.HTTP_404_NOT_FOUND)