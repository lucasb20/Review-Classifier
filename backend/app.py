from flask import Flask
from flask_cors import CORS
from resources import blp

import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY") or 'dev'

CORS(app)

app.register_blueprint(blp)