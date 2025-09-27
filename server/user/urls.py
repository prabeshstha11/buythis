from django.urls import path, include
from .views import check_superuser

urlpatterns = [
    path("superuser/", check_superuser, name="check_superuser")
]
