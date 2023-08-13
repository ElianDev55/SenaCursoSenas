from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

class Role(models.Model):
    name = models.CharField(max_length=10)
    state = models.BooleanField()

    def __str__(self):
        return self.name

class UserManager(BaseUserManager):
    def _create_user(self, idnumber, mail, name, surname, password, **extra_fields):
        if not idnumber:
            raise ValueError("El campo 'idnumber' debe ser establecido.")
        if not mail:
            raise ValueError("El campo 'mail' debe ser establecido.")
        
        user = self.model(
            idnumber=idnumber,
            mail=mail,
            name=name,
            surname=surname,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, idnumber, mail, name, surname, password=None, **extra_fields):
        return self._create_user(idnumber, mail, name, surname, password, **extra_fields)

    def create_superuser(self, idnumber, mail, name, surname, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser debe tener is_superuser=True.')
        
        return self._create_user(idnumber, mail, name, surname, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    idnumber = models.CharField(primary_key=True, max_length=40)
    name = models.CharField(max_length=40)
    surname = models.CharField(max_length=40)
    age = models.IntegerField()
    birth_day = models.DateField()
    gender = models.CharField(max_length=10)
    type_id = models.CharField(max_length=20)
    disability = models.BooleanField()
    password = models.CharField(max_length=40)
    mail = models.EmailField()
    telephone_number = models.CharField(max_length=15)
    state = models.BooleanField(default = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    
    USERNAME_FIELD = 'idnumber'
    REQUIRED_FIELDS = ['mail', 'name', 'surname', 'age', 'birth_day', 'gender', 'type_id', 'disability', 'telephone_number', 'state', 'role']

    objects = UserManager()

    def __str__(self):
        return f"{self.name} {self.surname}"
