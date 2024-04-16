
from flask.views import MethodView
from flask_smorest import Blueprint
from schemas import ReviewSchema
from utils import predict, preprocess_text


blp = Blueprint("reviews", "reviews", url_prefix="/reviews", description="Operations on reviews")

@blp.route("/")
class Reviews(MethodView):
    @blp.arguments(ReviewSchema)
    @blp.response(201)
    def post(self, data):
        text = preprocess_text(data["text"])
        output = predict(text)
        return { "predict" : output }
    