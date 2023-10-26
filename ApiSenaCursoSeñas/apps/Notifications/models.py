from django.db import models
from apps.videos.models import Video

class Notification(models.Model):
    Codigo = models.AutoField(primary_key=True)
    State = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    IdVideoFk =  models.ForeignKey(Video, on_delete=models.CASCADE)  # Usa la referencia correcta
    def __str__(self):
        return str(self.Codigo)
