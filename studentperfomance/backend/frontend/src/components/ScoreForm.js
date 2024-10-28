import React, { useState } from 'react';
import axios from 'axios';

function ScoreForm() {
    const [candidateName, setCandidateName] = useState('');
    const [interviewDate, setInterviewDate] = useState('');
    const [totalInterviewTime, setTotalInterviewTime] = useState('');
    const [batch, setBatch] = useState('');
    const [branch, setBranch] = useState('');
    const [technologies, setTechnologies] = useState([
        { name: 'HTML', points: 0, remarks: '', strength: '' },
        { name: 'CSS', points: 0, remarks: '', strength: '' },
        { name: 'JavaScript Fundamentals', points: 0, remarks: '', strength: '' },
        { name: 'JavaScript Expert', points: 0, remarks: '', strength: '' },
        { name: 'React', points: 0, remarks: '', strength: '' },
        { name: 'Core Java', points: 0, remarks: '', strength: '' },
        { name: 'Adv Java', points: 0, remarks: '', strength: '' },
        { name: 'Spring', points: 0, remarks: '', strength: '' },
        { name: 'Hibernate', points: 0, remarks: '', strength: '' },
        { name: 'MySQL', points: 0, remarks: '', strength: '' },
        { name: 'Problem Solving', points: 0, remarks: '', strength: '' },
        { name: 'DSA', points: 0, remarks: '', strength: '' },
        { name: 'Project', points: 0, remarks: '', strength: '' },
        { name: 'Communication', points: 0, remarks: '', strength: '' },
    ]);
    const [score, setScore] = useState(null);
    const [studentId, setStudentId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            candidateName,
            interviewDate,
            totalInterviewTime,
            batch,
            branch,
            technologies
        };
        try {
            const response = await axios.post('http://localhost:3001/api/scores', data);
            setScore(response.data);
        } catch (error) {
            console.error('Error submitting the form', error);
        }
    };

    const handleFetchScore = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/scores/${studentId}`);
            setScore(response.data);
        } catch (error) {
            console.error('Error fetching the score', error);
        }
    };

    const handleTechnologyChange = (index, field, value) => {
        const updatedTechnologies = technologies.map((tech, i) => {
            if (i === index) {
                return { ...tech, [field]: value };
            }
            return tech;
        });
        setTechnologies(updatedTechnologies);
    };

    return (
        <div className="ScoreForm">
            <h1>Student Score Submission</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Candidate Name:</label>
                    <input type="text" value={candidateName} onChange={(e) => setCandidateName(e.target.value)} required />
                </div>
                <div>
                    <label>Interview Date:</label>
                    <input type="date" value={interviewDate} onChange={(e) => setInterviewDate(e.target.value)} required />
                </div>
                <div>
                    <label>Total Interview Time:</label>
                    <input type="text" value={totalInterviewTime} onChange={(e) => setTotalInterviewTime(e.target.value)} required />
                </div>
                <div>
                    <label>Batch:</label>
                    <input type="text" value={batch} onChange={(e) => setBatch(e.target.value)} required />
                </div>
                <div>
                    <label>Branch / Stream:</label>
                    <input type="text" value={branch} onChange={(e) => setBranch(e.target.value)} required />
                </div>
                {technologies.map((tech, index) => (
                    <div key={index}>
                        <label>{tech.name} Points:</label>
                        <input type="number" value={tech.points} onChange={(e) => handleTechnologyChange(index, 'points', parseInt(e.target.value))} required />
                        <label>Remarks:</label>
                        <input type="text" value={tech.remarks} onChange={(e) => handleTechnologyChange(index, 'remarks', e.target.value)} required />
                        <label>Strength:</label>
                        <input type="text" value={tech.strength} onChange={(e) => handleTechnologyChange(index, 'strength', e.target.value)} required />
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
            <div>
                <h2>Fetch Student Score</h2>
                <input type="number" placeholder="Enter Student ID" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
                <button onClick={handleFetchScore}>Fetch Score</button>
            </div>
            {score && (
                <div>
                    <h2>Scores for {score.candidateName}</h2>
                    <p>Generic Employability Score: {score.genericEmployabilityScore.toFixed(2)}</p>
                    <p>Full Stack Employability Score: {score.fullStackEmployabilityScore.toFixed(2)}</p>
                    <p>Frontend Employability Score: {score.frontendEmployabilityScore.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
}

export default ScoreForm;
