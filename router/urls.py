from django.conf.urls import url
from django.urls import include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

urlpatterns = [
                  url(r'^auth/', include('djoser.urls.authtoken')),
              ] + router.urls
