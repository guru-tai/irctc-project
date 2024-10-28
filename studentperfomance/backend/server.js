const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let scores = [];

const technologyCategories = {
    'Generic': ['Core Java', 'Adv Java', 'Spring', 'Hibernate', 'Problem Solving'],
    'Full Stack': ['Core Java', 'Adv Java', 'Spring', 'Hibernate', 'MySQL', 'Project'],
    'Frontend': ['HTML', 'CSS', 'JavaScript Fundamentals', 'JavaScript Expert', 'React']
};

const calculateScores = (technologies) => {
    let totalPoints = 0;
    let genericPoints = 0;
    let fullStackPoints = 0;
    let frontendPoints = 0;

    technologies.forEach(tech => {
        totalPoints += tech.points;
        if (technologyCategories.Generic.includes(tech.name)) {
            genericPoints += tech.points;
        }
        if (technologyCategories['Full Stack'].includes(tech.name)) {
            fullStackPoints += tech.points;
        }
        if (technologyCategories.Frontend.includes(tech.name)) {
            frontendPoints += tech.points;
        }
    });

    const totalTechnologies = technologies.length;
    const genericEmployabilityScore = (genericPoints / totalTechnologies) * 10;
    const fullStackEmployabilityScore = (fullStackPoints / totalTechnologies) * 10;
    const frontendEmployabilityScore = (frontendPoints / totalTechnologies) * 10;

    return { genericEmployabilityScore, fullStackEmployabilityScore, frontendEmployabilityScore };
};

app.post('/api/scores', (req, res) => {
    const { candidateName, interviewDate, totalInterviewTime, batch, branch, technologies } = req.body;

    const scoresData = calculateScores(technologies);

    const newScore = {
        candidateName,
        interviewDate,
        totalInterviewTime,
        batch,
        branch,
        technologies,
        ...scoresData
    };

    scores.push(newScore);
    res.status(201).json(newScore);
});

app.get('/api/scores/:studentId', (req, res) => {
    const studentId = parseInt(req.params.studentId);
    const score = scores[studentId];
    if (score) {
        res.json(score);
    } else {
        res.status(404).send('Score not found');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
