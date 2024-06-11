from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path, re_path

from django.contrib import admin

from wagtail.admin import urls as wagtailadmin_urls
from wagtail import urls as wagtail_urls
from wagtail.documents import urls as wagtaildocs_urls
from wagtail.images.views.serve import ServeView

urlpatterns = [
    path("", include('apps.core.urls')),
    path("admin/", admin.site.urls),
    path('cms/', include(wagtailadmin_urls)),
    path("documents/", include(wagtaildocs_urls)),re_path(
        r"^images/([^/]*)/(\d*)/([^/]*)/[^/]*$",
        ServeView.as_view(),
        name="wagtailimages_serve",
    ),
    path('blog/', include(wagtail_urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)