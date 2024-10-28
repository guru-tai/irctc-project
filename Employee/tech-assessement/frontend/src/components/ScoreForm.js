import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChartComponent from './ChartComponent';

const ScoreForm = () => {
    const technologies = [
        "HTML", "CSS", "JavaScript Fundamentals", "JavaScript Expert",
        "React", "Core Java", "Adv Java", "Spring", "Hibernate",
        "MySQL", "Problem Solving", "DSA", "Project", "Communication"
    ];

    const [scores, setScores] = useState({});
    const [remarks, setRemarks] = useState({});

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/scores`)
             .then(response => {
                 const fetchedScores = response.data.reduce((acc, score) => {
                     acc[score.technology] = score.score;
                     return acc;
                 }, {});
                 setScores(fetchedScores);
             })
             .catch(error => {
                 console.error('Error fetching scores:', error);
             });
    }, []);

    const handleScoreChange = (tech, score) => {
        const updatedScores = { ...scores, [tech]: parseInt(score) };
        setScores(updatedScores);
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/scores`, { technology: tech, score: parseInt(score), remark: remarks[tech] })
             .then(response => {
                 console.log('Score saved successfully:', response.data);
             })
             .catch(error => {
                 console.error('Error saving score:', error);
             });
    };

    const handleRemarkChange = (tech, remark) => {
        setRemarks({ ...remarks, [tech]: remark });
    };

    return (
        <div>
            <h2>Technology Assessment Form</h2>
            <table>
                <thead>
                    <tr>
                        <th>Technology</th>
                        <th>Points</th>
                        <th>Graph</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {technologies.map(tech => (
                        <tr key={tech}>
                            <td>{tech}</td>
                            <td>
                                <input
                                    type="number"
                                    value={scores[tech] || ''}
                                    min="0"
                                    max="10"
                                    onChange={(e) => handleScoreChange(tech, e.target.value)}
                                />
                            </td>
                            <td>
                                <div style={{ width: `${(scores[tech] || 0) * 10}%`, height: '20px', backgroundColor: 'rgba(75, 192, 192, 0.6)' }}></div>
                            </td>
                            <td>
                                <div onChange={(e) => handleRemarkChange(tech, e.target.value)}>
                                    <input type="radio" value="Very Good" name={`remark-${tech}`} /> Very Good
                                    <input type="radio" value="Good" name={`remark-${tech}`} /> Good
                                    <input type="radio" value="Average" name={`remark-${tech}`} /> Average
                                    <input type="radio" value="Poor" name={`remark-${tech}`} /> Poor
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ChartComponent scores={scores} />
        </div>
    );
};

export default ScoreForm;
