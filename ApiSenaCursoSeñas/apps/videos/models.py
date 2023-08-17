from django.db import models
from apps.users.models import User
from apps.categories.models import Category


class Video(models.Model):
    idvideo = models.AutoField(primary_key=True)
    video = models.FileField(upload_to='videos/')  # Aquí se guarda el video
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=240)
    state = models.BooleanField(default=True)
    miniature = models.ImageField(upload_to='miniatures/')  # Aquí se guarda la imagen
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    idUser = models.ForeignKey(User, on_delete=models.CASCADE)
    idCategory = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
