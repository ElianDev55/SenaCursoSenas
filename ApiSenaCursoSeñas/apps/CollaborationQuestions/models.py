from django.db import models
from apps.users.models import User

class CollaborationQuestions(models.Model):
    IdColaboration = models.AutoField(primary_key=True)
    QuestionOne = models.CharField(max_length=240)
    QuestionTwo = models.CharField(max_length=240)
    QuestionThree = models.CharField(max_length=240)
    QuestionFour = models.CharField(max_length=240)
    QuestionFive = models.CharField(max_length=240)
    State = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True) 
    updated_at = models.DateTimeField(auto_now=True)
    IdUser = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.QuestionOne
