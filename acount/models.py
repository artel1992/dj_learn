from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    phone = models.CharField(max_length=25)
    address = models.ForeignKey('acount.Address')


class Address(models.Model):
    address = models.CharField(max_length=255)
