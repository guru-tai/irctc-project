// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [videoToken, setVideoToken] = useState('');
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get('/generate_token');
        const token = response.data.token;
        console.log('Received Token:', token); // Log the token received from backend
        setVideoToken(token);
        // Construct video URL with token embedded
        setVideoSrc(`/stream_video?token=${token}`);
      } catch (error) {
        console.error("Error fetching the token:", error);
      }
    };

    fetchToken();
  }, []);

  return (
    <div className="App">
      <h1>Secure Video Player</h1>
      <div>
        <p>Share this link:</p>
        <input type="text" value={`http://localhost:5000/stream_video?token=${videoToken}`} readOnly />
      </div>
      <video width="640" height="360" controls src={videoSrc}>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
