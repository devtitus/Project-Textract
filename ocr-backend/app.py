from flask import Flask, request, jsonify
from flask_cors import CORS
from paddleocr import PaddleOCR
import tempfile
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize PaddleOCR
ocr = PaddleOCR(use_angle_cls=True, lang='en')  # Load only the English model

# Allowed file extensions
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'bmp', 'tiff', 'tif'}

def allowed_file(filename):
    """Check if the file has an allowed extension."""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/ocr', methods=['POST'])
def ocr_endpoint():
    if 'image' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['image']

    # Validate file
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    if not allowed_file(file.filename):
        return jsonify({'error': 'Unsupported file format'}), 400

    # Save the file to a temporary file
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix='.png') as temp_file:
            file.save(temp_file.name)
            file_path = temp_file.name

        # Perform OCR
        result = ocr.ocr(file_path, cls=True)
        text = ' '.join([line[1][0] for line in result[0]])  # Extract text from the result
    except Exception as e:
        return jsonify({'error': f'OCR processing failed: {str(e)}'}), 500
    finally:
        # Clean up: Delete the temporary file
        if os.path.exists(file_path):
            os.remove(file_path)

    return jsonify({'text': text})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  # Use PORT environment variable or default to 5000
    app.run(host='0.0.0.0', port=port)  # Bind to all available IPs and the specified port