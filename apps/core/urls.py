app_name = "core"
from django.urls import include, path, re_path

urlpatterns = [
    path("", include('apps.web.urls')),
]
