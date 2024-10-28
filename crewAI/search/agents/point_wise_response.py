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

def generate_point_wise_response(query):
    response = call_gemini_api(query)
    content = response.get('candidates', [{}])[0].get('content', '')
    points = content.split('.')
    return '\n'.join(f"- {point.strip()}" for point in points if point.strip())

class PointWiseResponseAgent(Agent):
    def __init__(self, **kwargs):
        super().__init__(role="Point-wise Response Agent", goal="Provide responses in a point-wise format", **kwargs)
    
    def run(self, query):
        return generate_point_wise_response(query)
