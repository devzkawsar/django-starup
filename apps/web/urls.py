# Your urls go here
app_name = "web"
from django.urls import path, include
from apps.web.views import  (
    index
)

urlpatterns = [
    path("", index, name='index'),
]