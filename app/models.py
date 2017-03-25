from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Picture(models.Model):
    name = models.CharField(max_length=30)
    path = models.FileField(upload_to='uploads')
    owner = models.ForeignKey(User)
    uploaded = models.DateTimeField(default=timezone.now)

class Vote(models.Model):
    picture = models.ForeignKey(Picture)
    user = models.ForeignKey(User)
    time = models.DateTimeField(default=timezone.now)

class Order(models.Model):
    picture = models.ForeignKey(Picture)
    time = models.DateTimeField(default=timezone.now)
    contact = models.CharField(max_length=60)
    user = models.ForeignKey(User)
