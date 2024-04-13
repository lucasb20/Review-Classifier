
from marshmallow import Schema, fields

class ReviewSchema(Schema):
    text = fields.String(required=True)
    