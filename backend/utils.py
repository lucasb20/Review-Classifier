
import tflite_runtime.interpreter as tflite
import numpy as np
import re
import json

with open("static/word_index.json",'r') as json_file:
    word_index = json.load(json_file)

def createInterpreter():
    interpreter = tflite.Interpreter(model_path="static/my_model.tflite")
    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()
    interpreter.resize_tensor_input(input_details[0]['index'], (1, 256))
    interpreter.resize_tensor_input(output_details[0]['index'], (1, 1))
    interpreter.allocate_tensors()
    return interpreter, (input_details[0]['index'], output_details[0]['index'])

interpreter, (input_index, output_index) = createInterpreter()

def predict(data):
    input_data = np.array([data], np.float32)
    interpreter.set_tensor(input_index, input_data)
    interpreter.invoke()
    output_data = interpreter.get_tensor(output_index)
    return 1 if output_data[0][0] > 0.60 else 0

def pad_sequence(text, maxlen, value):
    x = np.full((maxlen,), value, dtype=np.float32)
    trunc = text[:maxlen]
    x[0: len(trunc)] = trunc
    return x

def preprocess_text(text : str):
    text = re.sub(r'[^\w\s]', '', text)
    words = text.lower().split()

    word_indices = [ word_index.get(word, word_index["<UNK>"]) for word in words ]
    word_indices.insert(0, word_index["<START>"])

    return pad_sequence(word_indices, maxlen=256, value=word_index["<PAD>"])