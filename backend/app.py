from flask import Flask, request, jsonify
import torch
import librosa
import numpy as np
from transformers import HubertForSequenceClassification, Wav2Vec2FeatureExtractor, pipeline

app = Flask(__name__)

# Load the model and feature extractor
model = HubertForSequenceClassification.from_pretrained("superb/hubert-large-superb-er")
feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("superb/hubert-large-superb-er")
classifier = pipeline("audio-classification", model="superb/hubert-large-superb-er")

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    if file and file.filename.endswith('.wav'):
        # Load and preprocess audio file
        speech, sr = librosa.load(file, sr=16000, mono=True)
        
        # Convert speech to numpy array
        speech_np = np.array(speech)
        
        # Process the audio
        inputs = feature_extractor(speech_np, sampling_rate=16000, padding=True, return_tensors="pt")
        
        # Predict emotion
        with torch.no_grad():
            logits = model(**inputs).logits
            predicted_ids = torch.argmax(logits, dim=-1)
            labels = [model.config.id2label[_id] for _id in predicted_ids.tolist()]
        
        # Alternatively using the pipeline
        results = classifier(speech_np, top_k=5)
        
        return jsonify({
            "predicted_emotion": labels[0],
            "top_5_predictions": [{"label": result['label'], "score": result['score']} for result in results]
        })
    else:
        return jsonify({"error": "Invalid file format. Please upload a .wav file."}), 400

if __name__ == '__main__':
    app.run(debug=True)
