from django.db import models


# Create your models here.
class Order(models.Model):
    user = models.ForeignKey('acount.User', on_delete=models.CASCADE)
    product = models.ManyToManyField('product.Product')
    color = models.ForeignKey('product.Color', on_delete=models.CASCADE)
    sum_price = models.FloatField(default=0)
