from apps.videos.models import Video
from apps.videos.api.VideoSeralizers import CategoryVideoSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_videos_by_category(request, category_id):
    try:
        # Filtrar videos por el nombre correcto del campo de categoría
        videos = Video.objects.filter(idCategory=category_id)

        # Crear una instancia del serializador pasando la solicitud para obtener URLs completas
        serializer = CategoryVideoSerializer(videos, many=True, context={'request': request})

        return Response(serializer.data)
    except Exception as e:
        return Response({'error': str(e)}, status=500)
