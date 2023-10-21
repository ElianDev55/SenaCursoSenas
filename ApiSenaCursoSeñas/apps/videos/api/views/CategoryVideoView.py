
from apps.videos.models import Video
from apps.videos.api.VideoSeralizers import CategoryVideoSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_videos_by_category(request, category_id):
    try:
        videos = Video.objects.filter(idCategory=category_id, state=True)
        
        # Crear una instancia del serializador pasando la solicitud para obtener URLs completas
        serializer = CategoryVideoSerializer(videos, many=True, context={'request': request})
        
        return Response(serializer.data)
    except Exception as e:
        return Response({'error': str(e)}, status=500)
