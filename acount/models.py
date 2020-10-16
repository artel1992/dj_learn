from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    phone = models.CharField(max_length=25, verbose_name=_('Phone'))
    address = models.ForeignKey('acount.Address', on_delete=models.CASCADE, verbose_name=_('Address'), null=True,
                                blank=True)


class Address(models.Model):
    address = models.CharField(max_length=255)
