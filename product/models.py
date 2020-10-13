from django.db import models


class MarkCar(models.Model):
    title = models.CharField(max_length=255)


class Color(models.Model):
    title = models.CharField(max_length=255)


class MainPhoto(models.Model):
    img = models.ImageField()
    model = models.ForeignKey('product.Product', on_delete=models.CASCADE)
    color = models.ForeignKey('product.Color', on_delete=models.CASCADE)


class BodyType(models.Model):
    title = models.CharField(max_length=255)


class EquipmentCar(models.Model):
    title = models.CharField(max_length=255)


class Product(models.Model):
    title = models.CharField(max_length=255)
    price = models.FloatField(max_length=255)
    description = models.TextField()
    mark = models.ForeignKey('product.MarkCar', on_delete=models.CASCADE)
    colors = models.ManyToManyField('product.Color')
    body_type = models.ForeignKey('product.BodyType', on_delete=models.CASCADE)
