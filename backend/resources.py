
from flask import Blueprint, jsonify, request
from utils import predict, preprocess_text


bp = Blueprint("Reviews", __name__, url_prefix="/reviews")

@bp.route("/", methods=['POST'])
def post():
    data = request.get_json()
    if 'text' not in data:
        return jsonify({"message": "text field not in body."}), 404
    text = preprocess_text(data["text"])
    output = predict(text)
    return { "predict" : output }, 201