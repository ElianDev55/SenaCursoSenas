from django.db import models
from apps.users.models import User

class Category(models.Model):
    idcategory = models.AutoField(primary_key=True)
    title = models.CharField(max_length=20)
    descripcion = models.CharField(max_length=240)
    state = models.BooleanField(default=True)
    miniature = models.ImageField(upload_to='miniatures/')  # Aquí se guarda la imagen
    iduser = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

def __str__(self):
        return self.title

