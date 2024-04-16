
from tensorflow import keras
import numpy as np
import re
import json

def predict(data):
    model = keras.models.load_model("static/modelv1.keras")
    data = np.expand_dims(data, axis=0)
    return model.predict(data)[0][0] > 0.5

def preprocess_text(text : str):
    text = re.sub(r'[^\w\s]', '', text)
    words = text.lower().split()

    with open("static/word_index.json",'r') as json_file:
        word_index : dict = json.dump(json_file)

    word_indices = [word_index.get(word, word_index["<UNK>"]) for word in words]
    
    pad_sequence = keras.utils.pad_sequences(word_indices, maxlen=256, padding='post', value=word_index["<PAD>"])

    return pad_sequence