import os
from dotenv import load_dotenv
import multiprocessing
from distutils.util import strtobool
  # Loading environment variables file
load_dotenv(
    os.path.join(os.path.dirname(__file__), '.env')
)

# if os.environ.get('ENVIRONMENT') == "production":
#     os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings.production")
# else:
#     os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings.dev")

chdir = os.environ.get("CHDIR","opt/app/")

module = "config.wsgi:application"

timeout= int(os.environ.get("TIMEOUT","250"))

bind = f"0.0.0.0:{os.getenv('PORT','8000')}"

accesslog = '-'

access_log_format = "%(h)s %(l)s %(u)s %(t)s '%(r)s' %(s)s %(b)s '%(f)s' '%(a)s' in %(D)sµs"

workers = int(os.getenv('WORKER', "{}".format(multiprocessing.cpu_count() * 2)), base=10)

threads = int(os.getenv('PYTHON_MAX_THREADS', 1))

reload = bool(strtobool(os.getenv('WEB_RELOAD', 'false')))