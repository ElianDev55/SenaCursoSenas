from apps.categories.models import  Category
from apps.categories.api.CategorySeralizers import CategorySerializer
from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
import os
from django.conf import settings


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = CategorySerializer.Meta.model.objects.filter(state=True)


class CategoryCreate(generics.ListCreateAPIView):
    queryset = Category.objects.all()  # Consulta para obtener todas las instancias de Category
    serializer_class = CategorySerializer  # Especificar el serializador a utilizar

    # Sobreescribir el método perform_create para agregar el usuario actual a la instancia de Category
    def perform_create(self, serializer):
        serializer.save(iduser=self.request.user)



class CategoryReadUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CategorySerializer  # Utiliza el serializer apropiado para el modelo Category
    
    # Obtener una instancia única o una lista de categorías
    def get_queryset(self):
        pk = self.kwargs.get('pk')
        if pk is None:
            return self.serializer_class.Meta.model.objects.all()
        else:
            category = self.serializer_class.Meta.model.objects.filter(id=pk, state=True).first()
            print(f"Categoria found: {category}")  # Agrega esta línea para depurar
            return category
    
    # Actualizar parcialmente una categoría (PATCH)
    def patch(self, request, pk=None):
        category = self.get_queryset(pk=pk)
        if category:
            serializer = self.serializer_class(category, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'message': 'No existe la categoría'}, status=status.HTTP_404_NOT_FOUND)
    
    # Actualizar completamente una categoría (PUT)
    def update(self, request, pk=None):
        category = self.get_queryset().filter(id=pk).first()
        if category:
            serializer = self.serializer_class(category, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'message': 'No existe la categoria'}, status=status.HTTP_404_NOT_FOUND)
    
    # Eliminar una categoría
    def destroy(self, request, pk=None):
        category = self.get_queryset().filter(id=pk).first()
        if category:
            image_path = os.path.join(settings.MEDIA_ROOT, 'miniatures', os.path.basename(str(category.miniature)))
            if os.path.exists(image_path):
                os.remove(image_path)
            category.delete()
            return Response({'message': 'Categoría eliminada correctamente'}, status=status.HTTP_204_NO_CONTENT)
        return Response({'message': 'No existe la categoría'}, status=status.HTTP_404_NOT_FOUND)