from app.models import *
from rest_framework import serializers

class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = ('name', 'path', 'owner', 'uploaded')
