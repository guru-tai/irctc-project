// backend/token.js
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET_KEY || 'default_secret_key';

function generateToken(videoId) {
  try {
    const token = jwt.sign({ videoId }, secret, { expiresIn: '1h' });
    console.log('Generated Token:', token);
    return token;
  } catch (err) {
    console.error('Error generating token:', err);
    return null;
  }
}

function validateToken(token) {
  try {
    jwt.verify(token, secret);
    return true;
  } catch (err) {
    console.error('Token validation error:', err);
    return false;
  }
}

module.exports = { generateToken, validateToken };
