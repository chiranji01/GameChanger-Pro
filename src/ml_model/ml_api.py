from flask import Flask, request, jsonify
from PIL import Image
import numpy as np
import os
import tensorflow as tf
from flask_cors import CORS, cross_origin  # Import cross_origin decorator

print("TensorFlow version:", tf.__version__)

app = Flask(__name__)
CORS(app)

# Define route for the root URL
@app.route('/')
def index():
    return 'Welcome to the Flask server!'

# Define the path to the model file
model_path = "C:/Users/CHIRANJI/Desktop/cricdatasetsimages/cricket_shot_classifier.h5"

# Check if the model file exists
if os.path.exists(model_path):
    try:
        # Load the model
        model = tf.keras.models.load_model(model_path)
        print("Model loaded successfully.")
        # Print model summary
        print(model.summary())
        
    except Exception as e:
        print("Error loading model:", e)
else:
    print(f"Model file '{model_path}' does not exist.")

# Define class labels
class_labels = ["Cover Drive", "Cut", "Drive", "Leg Glance", "Pull Shot", "Scoop", "Straight Drive", "Sweep"]

# Define shot descriptions
shot_descriptions = {
    "Cover Drive": "A cover drive is a typically a front foot shot, where the batsman leans into the ball with a straight bat, aiming to hit the ball through the covers.",
    "Cut": "The cut shot is played to a short delivery outside the off-stump, where the batsman uses the pace of the ball to guide it past backward point.",
    "Drive": "A drive shot is played with a full swing of the bat, usually towards the ball pitched up to the batsman.",
    "Leg Glance": "The leg glance is a deflection shot played towards the leg side, typically to a delivery directed at the leg stump or slightly outside.",
    "Pull Shot": "A pull shot is played to a short-pitched delivery, with the batsman aiming to hit the ball square on the leg side.",
    "Scoop": "The scoop shot involves the batsman lifting the ball over the fielders in the infield, typically played to a fuller delivery.",
    "Straight Drive": "The straight drive is a classic cricket shot, played with a straight bat towards the bowler's end.",
    "Sweep": "A sweep is a cross-batted front foot shot played to a low bouncing ball or slow full toss. It is played by sweeping the ball around to the leg side, typically towards square leg or fine leg. Sweep shot is a popular and efficient shot in cricket. It is usually hit on spinners in order to rotate the strike."
}

def preprocess_image(image):
    # Convert image to RGB (if not already)
    image = image.convert('RGB')
    # Resize image to match model input shape
    image = image.resize((150, 150))
    # Convert image to array
    img_array = np.array(image)
    # Preprocess image (e.g., normalization)
    img_array = img_array / 255.0
    # Add batch dimension
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    # Check if request contains file
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    
    file = request.files['file']
    # Check if file is empty
    if file.filename == '':
        return jsonify({'error': 'Empty file provided'}), 400

    try:
        # Read image file
        image = Image.open(file)
        # Preprocess image
        processed_image = preprocess_image(image)
        # Predict class probabilities
        predictions = model.predict(processed_image)
        
        print("Predictions:", predictions)  # Print the predictions
        
        # Get predicted class index
        predicted_class_idx = np.argmax(predictions)
        
        print("Predicted Class Index:", predicted_class_idx)  # Print the predicted class index

        # Get predicted class label
        predicted_class_label = class_labels[predicted_class_idx]
        
        print("Predicted Class Label:", predicted_class_label)  # Print the predicted class label

       # Retrieve shot description
        description = shot_descriptions.get(predicted_class_label, "No description available")
        print("Description:", description)  # Print the description

        
        player_name = request.form.get('playerName')  # Get player name from form data
        batting_style = request.form.get('battingStyle')  # Get batting style from form data
        
        return jsonify({
            'prediction': predicted_class_label,
            'description': description,  # Include the description data in the response
            'player_name': player_name,
            'batting_style': batting_style
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500




if __name__ == '__main__':
    app.run(debug=True)
