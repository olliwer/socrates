from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.utils.decorators import method_decorator

from app.models import *
from app.forms import *


class IndexView(TemplateView):
    template_name = 'index.html'

class PrivateView(LoginRequiredMixin, TemplateView):
    """
    Login required to access this view
    """
    login_url = '/login/'
    redirect_field_name = 'next'
    template_name = 'private.html'
