
import tensorflow as tf
from tensorflow import keras
import re

def load_model():
    return tf.keras.models.load_model("modelv1.keras")

def preprocess_text(text : str):
    text = re.sub(r'[^\w\s]', '', text)
    words = text.lower().split()

    imdb = keras.datasets.imdb
    word_index = imdb.get_word_index()

    word_index = {k:(v+3) for k,v in word_index.items()}
    word_index["<PAD>"] = 0
    word_index["<START>"] = 1
    word_index["<UNK>"] = 2
    word_index["<UNUSED>"] = 3

    word_indices = [word_index.get(word, word_index["<UNK>"]) for word in words]
    
    pad_sequence = keras.utils.pad_sequences(word_indices, maxlen=256, padding='post', value=word_index["<PAD>"])

    return pad_sequence