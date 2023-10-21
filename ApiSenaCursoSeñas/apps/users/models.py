from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

class Role(models.Model):
    name = models.CharField(max_length=10)
    state = models.BooleanField()

    def __str__(self):
        return self.name
    


class UserManager(BaseUserManager):
    def _create_user(self, username, mail,  password, **extra_fields):
        user = self.model(
            username = username,
            mail = mail,            
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(self, username, mail,  password=None, **extra_fields):
        return self._create_user(username, mail,  password, **extra_fields)

    def create_superuser(self, username, mail,  password=None, **extra_fields):
        return self._create_user(username, mail,  password, **extra_fields)



class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(primary_key=True, max_length=40)
    name = models.CharField(max_length=40)
    surname = models.CharField(max_length=40)
    age = models.IntegerField()
    birth_day = models.DateField()
    gender = models.CharField(max_length=10)
    avatar = models.ImageField(default='https://www.sena.edu.co/Style%20Library/alayout/images/logoSena.png')
    type_id = models.CharField(max_length=20)
    disability = models.BooleanField()
    mail = models.EmailField()
    telephone_number = models.CharField(max_length=15)
    state = models.BooleanField(default=True) 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, default=1)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['mail', 'name', 'surname', 'age', 'birth_day', 'gender', 'type_id', 'disability', 'telephone_number']

    objects = UserManager()

    def __str__(self):
        return f"{self.name} {self.surname}"
