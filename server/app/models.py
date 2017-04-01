from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

"""
Creates auth token for registered users
"""
@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

class Picture(models.Model):
    name = models.CharField(max_length=30)
    path = models.FileField(upload_to='uploads')
    owner = models.ForeignKey(User)
    uploaded = models.DateTimeField(default=timezone.now)
    score = models.IntegerField(db_index=True, default=0)
    winner = models.BooleanField(default=False)

class Vote(models.Model):
    value = models.IntegerField()
    picture = models.ForeignKey(Picture)
    user = models.ForeignKey(User)
    time = models.DateTimeField(default=timezone.now)

class Order(models.Model):
    picture = models.ForeignKey(Picture)
    time = models.DateTimeField(default=timezone.now)
    contact = models.CharField(max_length=60)
    user = models.ForeignKey(User)
