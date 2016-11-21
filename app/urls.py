from django.conf.urls import url
from django.contrib.auth import views as auth_views

from app.views import *

urlpatterns = [

    # Auth
    url(r'^login/$', auth_views.login, {'template_name': 'login.html'}, name='login'),
    url(r'^logout/$', auth_views.logout, {'next_page': '/'}, name='logout'),

    # Index
    url(r'^$', IndexView.as_view(), name='index'),

]
