from app.models import *
from rest_framework import serializers

class PictureSerializer(serializers.ModelSerializer):
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
