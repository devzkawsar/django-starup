#!/bin/sh
set -e
python manage.py migrate --noinput
python manage.py collectstatic --noinput

count=$(ls -1 *.env 2>/dev/null | wc -l)
if [ "$count" != 0 ]; then
  mv *.env .env
fi

set -a; source .env; set +a

# python manage.py runserver
# python manage.py migrate

gunicorn --config gunicorn.conf.py config.wsgi:application
