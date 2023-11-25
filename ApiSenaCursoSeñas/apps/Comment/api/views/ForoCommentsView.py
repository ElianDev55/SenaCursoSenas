
from apps.Comment.models import Comment
from apps.Comment.api.CommentSeralizers   import ForoCommentsViewSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.decorators import api_view


@api_view(['GET'])
def get_comment_by_foro(request, foro_id):
    try:
        # Filtrar comentarios por el foro_id
        comments = Comment.objects.filter(IdDis_id=foro_id)

        # Crear una instancia del serializador pasando la solicitud para obtener URLs completas
        serializer = ForoCommentsViewSerializer(comments, many=True, context={'request': request})

        return Response(serializer.data)
    except Exception as e:
        return Response({'error': str(e)}, status=500)
