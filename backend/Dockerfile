FROM python:3-slim

WORKDIR /usr/src/backend

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

CMD flask --app api db init && \
    flask --app api db migrate && \
    flask --app api db upgrade && \
    flask --app api run --host=0.0.0.0