"""
URL configuration for irctc project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api.views import register_user, login_user, add_new_train,train_availability,all_trains,update_train,book_train

urlpatterns = [
    path('api/signup', register_user, name='signup'),
    path('api/login', login_user, name='login'),
    path('api/trains/create', add_new_train, name='add_new_train'),
    path('api/trains/availability/', train_availability, name='train_availability'),
    path('api/trains/all', all_trains, name='all_trains'),
    path('api/trains/update/<int:train_id>', update_train, name='update_train'),
    path('api/trains/<int:train_id>/book', book_train, name='book_train'),
]