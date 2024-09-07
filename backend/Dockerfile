FROM python:3.10-slim

WORKDIR /usr/src/backend

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 80

CMD gunicorn --preload --bind 0.0.0.0:80 --threads 4 app:app