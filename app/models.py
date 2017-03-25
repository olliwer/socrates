from django.db import models
from django.utils import timezone

class Picture(models.Model):
    path = models.FileField(upload_to='uploads/')
    uploaded = models.DateTimeField(default=timezone.now)
