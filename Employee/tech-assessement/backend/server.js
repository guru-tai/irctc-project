const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const scoreRoutes = require('./routes/scores');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/scores', scoreRoutes);

mongoose.connect('mongodb://localhost:27017/tech-assessment', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
