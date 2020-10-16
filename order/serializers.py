from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField

from acount.models import User
from order.models import Order
from product.models import Color, Product


class OrderSerializer(ModelSerializer):
    user = PrimaryKeyRelatedField(queryset=User.objects.all())
    product = PrimaryKeyRelatedField(queryset=Product.on_site.all())
    color = PrimaryKeyRelatedField(queryset=Color.objects.all())

    class Meta:
        model = Order
        fields = [
            'user',
            'product',
            'color'
        ]
