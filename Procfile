web: gunicorn index.wsgi

web: python myapp/manage.py collectstatic --noinput; bin/gunicorn_django --workers=4 --bind=0.0.0.0:$PORT index/settings.py