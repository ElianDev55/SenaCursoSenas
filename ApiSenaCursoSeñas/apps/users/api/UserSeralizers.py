from apps.users.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        # Extraer y encriptar la contraseña antes de crear el usuario
        password = validated_data.pop('password', None)
        user = super().create(validated_data)
        
        if password:
            user.set_password(password)
            user.save()

        return user


class UserTokenSerializer(serializers.ModelSerializer):
        
        class Meta:
            model = User
            fields = ('username','password', 'disability')

