from django.contrib import admin
from product.models import Product


class ProductAdmin(admin.ModelAdmin):
    fields = [
        'site',
        'id',
        'title'
    ]


admin.site.register(Product, ProductAdmin)
