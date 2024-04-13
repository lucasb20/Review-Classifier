
import tensorflow as tf
from tensorflow import keras
import numpy as np

# Download
imdb = keras.datasets.imdb

(train_data, train_labels), (test_data, test_labels) = imdb.load_data(num_words=10000)


# Setup dict
word_index = imdb.get_word_index()

word_index = {k:(v+3) for k,v in word_index.items()}
word_index["<PAD>"] = 0
word_index["<START>"] = 1
word_index["<UNK>"] = 2
word_index["<UNUSED>"] = 3

reverse_word_index = dict([(value, key) for (key, value) in word_index.items()])


# decode review funcion
def decode_review(text):
    return ' '.join([reverse_word_index.get(i, '?') for i in text])

print("text:",train_data[0])
print("length:",len(train_data[0]))
print("decoded review:",decode_review(train_data[0]))


