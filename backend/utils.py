
from tensorflow import keras
import numpy as np
import re
import json

def createModel():
    model = keras.models.load_model("static/modelv1.h5")

    return model

def predict(data):
    model = createModel()
    
    return 1 if model.predict(data)[0][0] > 0.60 else 0

def preprocess_text(text : str):
    text = re.sub(r'[^\w\s]', '', text)
    words = text.lower().split()

    with open("static/word_index.json",'r') as json_file:
        word_index = json.load(json_file)

    word_indices = [word_index.get(word, word_index["<UNK>"]) for word in words]
    word_indices.insert(0, word_index["<START>"])
    word_indices = np.expand_dims(word_indices, axis=0)

    pad_sequence = keras.utils.pad_sequences(word_indices, maxlen=256, padding='post', value=word_index["<PAD>"])

    return pad_sequence