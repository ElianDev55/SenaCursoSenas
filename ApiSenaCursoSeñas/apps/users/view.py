from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from apps.users.api.UserSeralizers import UserTokenSerializer   
from django.contrib.sessions.models import Session
from datetime import datetime
from rest_framework.views import APIView

class Login(ObtainAuthToken):
    
    def post(self, request, *args, **kwargs):
        login_serializer = self.serializer_class(data=request.data, context={'request': request})
        
        if login_serializer.is_valid():
            user = login_serializer.validated_data['user']
            
            if not user.state:
                return Response({'error': 'This user is not active.'}, status=status.HTTP_401_UNAUTHORIZED)
            
            token, created = Token.objects.get_or_create(user=user)
            user_serializer = UserTokenSerializer(user)
            
            if created:
                return Response({'token': token.key, 'user': user_serializer.data, 'message': "Correct"}, status=status.HTTP_201_CREATED)
            else:
                all_sessions = Session.objects.filter(expire_date__gte= datetime.now())
                if all_sessions.exists():
                    for session in all_sessions:
                        session_data = session.get_decoded()
                        if user.username == session_data.get('_auth_user_id'):
                            session.delete()
                token.delete()
                token = Token.objects.create(user=user)
                return Response({'token': token.key, 'user': user_serializer.data, 'message': "Logged in"}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Wrong email or password.', 'errors': login_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class Logout(APIView):
    def get (self, request, *args, **kwargs):
        try:
            token = request.GET.get('token')
            token = Token.objects.filter(key=token).first()
            if token:
                user = token.user
                all_sessions = Session.objects.filter(expire_date__gte= datetime.now())
                if all_sessions.exists():
                    for session in all_sessions:
                        session_data = session.get_decoded()
                        if user.username == session_data.get('_auth_user_id'):
                            session.delete()
                token.delete()
                return Response({'message': 'Logged out.'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid token.'}, status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response({'error': 'Token is required.'}, status=status.HTTP_400_BAD_REQUEST)