from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv
from flask_cors import CORS  # Import CORS

load_dotenv()

app = Flask(__name__)

# Apply CORS settings - Update to only allow necessary origins
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:3000"]}}, supports_credentials=True)

@app.route('/api/generate-quiz', methods=['POST'])
def generate_quiz():
    file = request.files.get('file')
    topic = request.form.get('topic')

    if not topic:
        return jsonify({'error': 'Topic is required'}), 400

    try:
        data = {'topic': topic}
        files = {'file': (file.filename, file.stream, file.content_type)} if file else None

        headers = {
            'Authorization': f'Bearer {os.getenv("GEMINI_API_KEY")}'
        }

        # Replace with the correct API endpoint URL
        response = requests.post(
            'https://api.gemini.com/generate-quiz',  # Update with the correct endpoint URL
            files=files,
            data=data,
            headers=headers
        )
        response.raise_for_status()

        result = response.json()
        flashcards = result.get('flashcards', [])
        multipleChoiceQuestions = result.get('multipleChoiceQuestions', [])
        download_url = result.get('download_url', '')

        return jsonify({
            'flashcards': flashcards,
            'multipleChoiceQuestions': multipleChoiceQuestions,
            'download_url': download_url
        })
    except requests.RequestException as e:
        print(f'Error generating quiz: {e}')
        return jsonify({'error': 'Error generating quiz'}), 500

if __name__ == '__main__':
    app.run(port=8000)
