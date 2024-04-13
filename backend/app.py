from flask import Flask
from flask_smorest import Api

app = Flask(__name__)
app.config["API_TITLE"] = "My API"
app.config["API_VERSION"] = "v1"
app.config["OPENAPI_VERSION"] = "3.0.2"
api = Api(app)