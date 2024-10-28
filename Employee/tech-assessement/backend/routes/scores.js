const express = require('express');
const Score = require('../models/score');
const router = express.Router();

router.get('/', async (req, res) => {
    const scores = await Score.find();
    res.json(scores);
});

router.post('/', async (req, res) => {
    const { technology, score, remark } = req.body;
    const newScore = new Score({ technology, score, remark });
    await newScore.save();
    res.json(newScore);
});

module.exports = router;
