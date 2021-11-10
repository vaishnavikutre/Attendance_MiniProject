from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import Users


class CustomUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = Users
        fields = ('email',)


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = Users
        fields = ('email',)
