from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User

class UserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('name', 'surname', 'age', 'birth_day', 'gender', 'avatar', 'type_id', 'disability', 'mail', 'telephone_number')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'role')}),
        ('Important dates', {'fields': ('last_login', 'created_at')}),
    )
    list_display = ('username', 'name', 'surname', 'is_staff')
    list_filter = ('is_staff', 'is_superuser', 'role')
    search_fields = ('username', 'name', 'surname')
    ordering = ('username',)
    exclude = ('updated_at',)  # Excluye el campo 'updated_at' al editar
    readonly_fields = ('created_at',)  # Marca 'created_at' como solo lectura al crear un usuario

admin.site.register(User, UserAdmin)