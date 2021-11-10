from django.urls import path
from .views import AddUser

urlpatterns = [
    path('adduser/', AddUser.as_view()),
]