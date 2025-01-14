import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the saved ML model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/')
def home():
    return "Welcome to the ML Model API!"

@app.route('/predict', methods=['POST'])
def predict():
    # Get input JSON data
    data = request.get_json()
    
    # Extract features
    features = data['features']  # Ensure features match model input
    
    # Make predictions
    prediction = model.predict([features])
    print(prediction[0])
    
    # Return prediction as JSON
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    # Bind to 0.0.0.0 and use the port provided by the environment variable
    import os
    port = int(os.environ.get('PORT', 5000))  # Default to 5000 if PORT is not set
    app.run(host='0.0.0.0', port=port, debug=True)
