from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

class Role(models.Model):
    name = models.CharField(max_length=10)
    state = models.BooleanField()

    def _str_(self):
        return self.name

class CustomUserManager(BaseUserManager):
    def create_user(self, username, mail, password=None, **extra_fields):
        if not mail:
            raise ValueError('El campo de correo electrónico debe estar configurado')
        username = self.normalize_email(username)
        user = self.model(username=username, mail=mail, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, mail, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser debe tener is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser debe tener is_superuser=True.')

        return self.create_user(username, mail, password, **extra_fields)

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
    mail = models.EmailField(unique=True)  # Cambiado a unique=True
    telephone_number = models.CharField(max_length=15)
    inforpersonal = models.TextField(max_length=500, blank=True, null=True)
    state = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, default=1)
    is_staff = models.BooleanField(default=False)  # Agregado para definir si es personal de staff
    is_active = models.BooleanField(default=True)  # Agregado para definir si el usuario está activo

    # Configura el administrador personalizado
    objects = CustomUserManager()

    # Define el campo de identificación del usuario
    USERNAME_FIELD = 'username'
    # Campos requeridos para la creación de usuarios
    REQUIRED_FIELDS = ['mail', 'name', 'surname', 'age', 'birth_day', 'gender', 'type_id', 'disability', 'telephone_number']

    def _str_(self):
        return f"{self.name} {self.surname}"