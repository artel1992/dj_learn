from django.db import models


# Create your models here.
class Order(models.Model):
    user_id = models.ForeignKey('acount.User')
    product = models.ForeignKey('product.Product')
    color = models.ForeignKey('product.Color', on_delete=models.CASCADE)
