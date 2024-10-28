from flask import Flask, request, jsonify
from crew import run_crew
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)

@app.route('/api/search', methods=['POST'])
def search():
    data = request.get_json()
    query = data.get('query', '')
    if not query:
        return jsonify({'error': 'Query is required'}), 400

    results = run_crew(query)
    return jsonify(results)

if __name__ == '__main__':
    app.run(port=int(os.getenv('PORT', 3000)))
