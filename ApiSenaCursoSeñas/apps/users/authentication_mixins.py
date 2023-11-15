from rest_framework.authentication import get_authorization_header
from apps.users.authentication import ExpiringTokenAuthentication

class Authentication(object):
    
    
    def get_user(self,request):
        token = get_authorization_header(request).split()
        if token:
            print(token)
        return None

    def dispath (self, request, *args, **kwargs):
        user = self.get_user(request)
        return super().dispatch(request, *args, **kwargs)