from crewai import Agent
import requests
import os
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')

def call_gemini_api(query):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key={GEMINI_API_KEY}"
    headers = {'Content-Type': 'application/json'}
    payload = {'contents': [{'parts': [{'text': query}]}]}
    response = requests.post(url, json=payload, headers=headers)
    return response.json()

def is_java_related(query):
    response = call_gemini_api(query)
    content = response.get('candidates', [{}])[0].get('content', '')
    return 'java' in content.lower()

class JavaTechnologyAnalyzerAgent(Agent):
    def __init__(self, **kwargs):
        super().__init__(role="Java Technology Analyzer", goal="Analyze if the query is related to Java technology", **kwargs)
    
    def run(self, query):
        return is_java_related(query)
