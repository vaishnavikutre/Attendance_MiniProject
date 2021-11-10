from django.contrib import admin
from users.models import Users
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserChangeForm, CustomUserCreationForm
from django import forms
from django.db import models


class UserAdminConfig(UserAdmin):
    model = Users
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    search_fields = ('email',)
    list_filter = ('email', 'is_active', 'is_staff')
    list_display = ('email', 'is_staff')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff')})
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email',  'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )
    ordering = ('email',)


admin.site.register(Users, UserAdminConfig)
