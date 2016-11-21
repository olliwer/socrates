from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

from app.models import *
from app.forms import *


#@method_decorator(login_required, name='dispatch')
class IndexView(TemplateView):
    template_name = 'index.html'
