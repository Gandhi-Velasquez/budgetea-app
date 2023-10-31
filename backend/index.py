from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import pandas as pd

app = Flask(__name__)

cors = CORS(app, resources={r"/upload": {"origins": "http://localhost:3000", "methods": ["POST"], "allow_headers": ["Content-Type"], "supports_credentials": True}})

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'xlsx', 'xls', 'csv'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filename)

        if filename.endswith('.csv'):
            df = pd.read_csv(filename)
        elif filename.endswith('.xlsx') or filename.endswith('.xls'):
            df = pd.read_excel(filename)
        else:
            return jsonify({"error": "Unsupported file type"}), 400

        required_columns = ['Date', 'Description', 'Category', 'Amount']
        processed_data = df[required_columns]

        processed_data_list = processed_data.to_dict(orient='records')
        
        return jsonify({"message": "File uploaded and processed successfully", "data": processed_data_list}), 200
    else:
        return jsonify({"error": "Invalid file type"}), 400

if __name__ == '__main__':
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)
    app.run(debug=True)
