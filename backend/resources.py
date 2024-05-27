
from flask import Blueprint, jsonify, request
from utils import predict, preprocess_text


bp = Blueprint("Reviews", __name__, url_prefix="/reviews")

@bp.route("/", methods=['POST'])
def post():
    data = request.get_json()
    try:
        review = str(data["review"])
    except:
        return jsonify({ 'message': 'review field not in body.' }), 404

    text = preprocess_text(review)
    output = predict(text)
    return { "predict" : output }, 201