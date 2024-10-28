const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    technology: String,
    score: Number,
    remark: String
});

module.exports = mongoose.model('Score', ScoreSchema);
