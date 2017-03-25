from app.models import *
from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'first_name', 'last_name', 'email', 'last_login', 'date_joined')
        write_only_fields = ('password',)
        read_only_fields = ('is_staff', 'is_superuser', 'is_active', 'date_joined',)

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class PictureSerializer(serializers.ModelSerializer):
    votes = Vote.objects
    class Meta:
        model = Picture
        fields = ('name', 'path', 'owner', 'uploaded')

class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = ('picture', 'user', 'time')

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('picture', 'contact', 'user', 'time')
