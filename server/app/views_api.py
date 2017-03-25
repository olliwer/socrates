from app.models import *
from app.serializers import *
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser, FileUploadParser
from rest_framework.response import Response
from rest_framework import status


class Pictures(APIView):
    """
    List all pictures or create a new picture.
    """
    parser_classes = (JSONParser, FileUploadParser) # Content-Type: application/json
    def get(self, request, format=None):
        pictures = Picture.objects.all()
        serializer = PictureSerializer(pictures, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = PictureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)