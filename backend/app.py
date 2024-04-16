from flask import Flask
from flask_smorest import Api
from flask_cors import CORS
from resources import blp

import os

app = Flask(__name__)
app.config["API_TITLE"] = "My API"
app.config["API_VERSION"] = "v1"
app.config["OPENAPI_VERSION"] = "3.0.2"
frontend_host = os.getenv("frontend_host")
CORS(app, origins=[frontend_host])
api = Api(app)

api.register_blueprint(blp)