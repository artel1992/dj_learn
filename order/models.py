from django.db import models


# Create your models here.
class Order(models.Model):
    user = models.ForeignKey('acount.User', on_delete=models.CASCADE)
    product = models.ForeignKey('product.Product', on_delete=models.CASCADE)
    color = models.ForeignKey('product.Color', on_delete=models.CASCADE)
