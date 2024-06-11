from django.http import HttpResponse
from django.shortcuts import render
import datetime

def hello(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    return HttpResponse(html)

def index(request):
    return render(request, 'index.html')