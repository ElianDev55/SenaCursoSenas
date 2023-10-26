from django.db import models
from apps.users.models import User
from apps.Discussion.models import Discussion

class Comment(models.Model):
    IdComment = models.AutoField(primary_key=True)
    Description = models.CharField(max_length=240)
    State = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    IdUser = models.ForeignKey(User, on_delete=models.CASCADE)
    IdDis = models.ForeignKey(Discussion, on_delete=models.CASCADE)

    def __str__(self):
        return self.Description
