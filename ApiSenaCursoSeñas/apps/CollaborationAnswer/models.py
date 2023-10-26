from django.db import models
from apps.users.models import User
from apps.videos.models import Video

class CollaborationAnswer(models.Model):
    IdCollaborationAnswer = models.AutoField(primary_key=True)
    QuestionOne = models.CharField(max_length=50)
    QuestionTwo = models.CharField(max_length=50)
    QuestionThree = models.CharField(max_length=50)
    QuestionFour = models.CharField(max_length=50)
    QuestionFive = models.CharField(max_length=50)
    State = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True) 
    updated_at = models.DateTimeField(auto_now=True)
    IdVideo = models.ForeignKey(Video, on_delete=models.CASCADE)
    IdUser = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.QuestionOne
