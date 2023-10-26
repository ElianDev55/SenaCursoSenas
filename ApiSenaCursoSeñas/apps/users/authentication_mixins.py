from apps.users.authentication import ExpiringTokenAuthentication

class Authentication(object):
    
    def dispath (self, request, *args, **kwargs):
        
        
        
        return super().dispatch(request, *args, **kwargs)