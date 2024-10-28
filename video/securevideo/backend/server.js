// backend/server.js
const express = require('express');
const path = require('path');
const { generateToken, validateToken } = require('./token');
const app = express();
const PORT = process.env.PORT || 5000;

const secret = process.env.SECRET_KEY;

app.use('/stream_video', (req, res, next) => {
  const token = req.query.token;
  if (!token || !validateToken(token)) {
    return res.status(403).send('Access denied');
  }
  next();
});

app.get('/generate_token', (req, res) => {
  const videoId = 'class_video'; // Replace with a unique video identifier
  const token = generateToken(videoId);
  res.json({ token });
});

app.get('/stream_video', (req, res) => {
  const videoPath = path.join(__dirname, 'videos/priya mithunam.mp4');
  res.sendFile(videoPath);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
