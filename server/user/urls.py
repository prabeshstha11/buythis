from django.urls import path, include
from .views import check_superuser, ItemViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'Items', ItemViewSet, basename="items")

urlpatterns = [
    path("superuser/", check_superuser, name="check_superuser"),
        path('', include(router.urls)),
]
