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

    def create_user(self, idnumber, mail, password=None, **extra_fields):
        if not idnumber:
            raise ValueError('El número de identificación es obligatorio')
        if not mail:
            raise ValueError('El correo es obligatorio')
        user = self.model(idnumber=idnumber, mail=mail, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, idnumber, mail, password=None, **extra_fields):
        # Obtener o crear la instancia de Role para superusuarios
        admin_role, created = Role.objects.get_or_create(name='Admin', state=True)

        if not isinstance(admin_role, Role):
            raise ValueError('El rol del superusuario no es válido.')

        extra_fields['role'] = admin_role

        return self.create_user(idnumber, mail, password, **extra_fields)



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
    state = models.BooleanField(default=True) 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, default=1)

    USERNAME_FIELD = 'idnumber'
    REQUIRED_FIELDS = ['mail', 'name', 'surname', 'age', 'birth_day', 'gender', 'type_id', 'disability', 'telephone_number']

    objects = UserManager()

    def __str__(self):
        return f"{self.name} {self.surname}"
