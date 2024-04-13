
from flask.views import MethodView
from flask_smorest import Blueprint, abort

from schemas import ReviewSchema


blp = Blueprint("reviews", "reviews", url_prefix="/reviews", description="Operations on reviews")

@blp.route("/")
class Reviews(MethodView):
    @blp.arguments(ReviewSchema)
    @blp.response(201)
    def post(self, data):
        return { "message" : "Not Implemented" }
    