from django.conf.urls import url
from django.contrib.auth import views as auth_views

from app.views import *
from app.views_api import *

urlpatterns = [

    # Auth
    url(r'^login/$', auth_views.login, {'template_name': 'login.html'}, name='login'),
    url(r'^logout/$', auth_views.logout, {'next_page': '/'}, name='logout'),

    # Client
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^private/$', PrivateView.as_view(), name='private'),

    # API
    url(r'^api/pictures/$', Pictures.as_view(), name='pictures'),
    url(r'^api/votes/$', Votes.as_view(), name='votes'),
    url(r'^api/orders/$', Orders.as_view(), name='orders'),
    url(r'^api/users/$', Users.as_view(), name='users'),
]
