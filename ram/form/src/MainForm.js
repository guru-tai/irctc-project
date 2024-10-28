import React, { useState, useEffect } from 'react';
import './MainForm.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const technologies = [
  'HTML', 'CSS', 'JavaScript Fundamentals', 'JavaScript Expert', 'React',
  'Core Java', 'Adv Java', 'Spring', 'Hibernate', 'MySQL', 
  'Problem Solving', 'DSA', 'Project', 'Communication', 'Resume', 'Self Introduction'
];

const MainForm = () => {
  const initialState = technologies.reduce((acc, tech) => {
    acc[tech] = { points: 0, remarks: '', barColor: '', pointsOptions: [], strength: '', weakness: '', questions: '' };
    return acc;
  }, {});

  const [formState, setFormState] = useState(initialState);
  const [genericEmployabilityScore, setGenericEmployabilityScore] = useState(0);
  const [frontendEmployabilityScore, setFrontendEmployabilityScore] = useState(0);
  const [fullstackEmployabilityScore, setFullstackEmployabilityScore] = useState(0);
  const [currentTechIndex, setCurrentTechIndex] = useState(0); // Track current technology index

  useEffect(() => {
    calculateScores();
  }, [formState]);

  const calculateScores = () => {
    const genericTechs = ['Core Java', 'Adv Java', 'Problem Solving', 'DSA', 'Project', 'Communication', 'Resume', 'Self Introduction'];
    const frontendTechs = ['HTML', 'CSS', 'JavaScript Fundamentals', 'JavaScript Expert', 'React'];
    const fullstackTechs = technologies;

    setGenericEmployabilityScore(calculatePercentage(genericTechs));
    setFrontendEmployabilityScore(calculatePercentage(frontendTechs));
    setFullstackEmployabilityScore(calculatePercentage(fullstackTechs));
  };

  const calculatePercentage = (techs) => {
    const totalPoints = techs.reduce((sum, tech) => sum + formState[tech].points, 0);
    const maxPoints = techs.length * 10;
    return maxPoints > 0 ? ((totalPoints / maxPoints) * 100).toFixed(2) : '0.00';
  };

  const handleRemarksChange = (tech, e) => {
    const remarks = e.target.value;
    let points = formState[tech].points;
    let pointsOptions = getValidPoints(remarks);

    // Set default points based on remarks
    if (remarks === 'very good') points = 9;
    if (remarks === 'good') points = 6;
    if (remarks === 'average') points = 4;
    if (remarks === 'poor') points = 1;

    setFormState({
      ...formState,
      [tech]: { ...formState[tech], remarks, points, barColor: getBarColor(points), pointsOptions }
    });
  };

  const handlePointsChange = (tech, e) => {
    const points = parseInt(e.target.value, 10);
    setFormState({
      ...formState,
      [tech]: { ...formState[tech], points, barColor: getBarColor(points) }
    });
  };

  const handleInputChange = (tech, field, e) => {
    const value = e.target.value;
    setFormState({
      ...formState,
      [tech]: { ...formState[tech], [field]: value }
    });
  };

  const getBarColor = (points) => {
    if (points >= 9) return '#4caf50'; // Very Good - Green
    if (points >= 6) return '#2196F3'; // Good - Blue
    if (points >= 4) return '#FF9800'; // Average - Orange
    return '#F44336'; // Poor - Red
  };

  const getValidPoints = (remarks) => {
    switch (remarks) {
      case 'very good':
        return [9, 10];
      case 'good':
        return [6, 7, 8];
      case 'average':
        return [4, 5];
      case 'poor':
        return [1, 2, 3];
      default:
        return [];
    }
  };

  const handleTechnologyClick = (index) => {
    setCurrentTechIndex(index);
  };

  // Dark mode theme
  const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0d47a1', // Dark blue background
      paper: '#1976d2',   // Slightly lighter dark blue for paper/card elements
    },
    primary: {
      main: '#4caf50', // Green for primary elements
    },
    secondary: {
      main: '#81c784', // Light green for secondary elements
    },
    text: {
      primary: '#FFFFFF', // White text
      secondary: '#B3B3B3', // Light gray text for secondary information
    },
  },
});


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="form-container">
        <header className="form-header">
          <div className="candidate-info">
            <p>Candidate Name: Rahul</p>
            <p>Interview Date: 15/06/2024</p>
            <p>Total Interview Time: 90 mins</p>
            <p>Batch: JUN-B1</p>
            <p>Branch / Stream: CSE</p>
          </div>
          <div className="scores">
            <div style={{ backgroundColor: '#FFEB3B' }}>
              <p>Generic Employability Score</p>
              <h1>{genericEmployabilityScore}%</h1>
            </div>
            <div style={{ backgroundColor: '#FF9800' }}>
              <p>Full Stack Employability Score</p>
              <h1>{fullstackEmployabilityScore}%</h1>
            </div>
            <div style={{ backgroundColor: '#4CAF50' }}>
              <p>Frontend Employability Score</p>
              <h1>{frontendEmployabilityScore}%</h1>
            </div>
          </div>
        </header>
        <table className="form-table">
          <thead>
            <tr>
              <th style={{ width: '15%' }}>Technology</th>
              <th style={{ width: '10%' }}>Points</th>
              <th style={{ width: '75%' }}>Details</th>
            </tr>
          </thead>
          <tbody>
            {technologies.map((tech, index) => (
              <React.Fragment key={tech}>
                <tr className={currentTechIndex === index ? 'current-technology' : ''} onClick={() => handleTechnologyClick(index)}>
                  <td>{tech}</td>
                  <td>
                    <select
                      value={formState[tech].points}
                      onChange={(e) => handlePointsChange(tech, e)}
                    >
                      {formState[tech].pointsOptions.map((val) => (
                        <option key={val} value={val}>{val}</option>
                      ))}
                    </select>
                    <div className="points-bar">
                      <div
                        className="bar"
                        style={{ width: `${formState[tech].points * 10}%`, backgroundColor: formState[tech].barColor }}
                      ></div>
                    </div>
                  </td>
                  <td>
                    {currentTechIndex === index && (
                      <div className="details-section">
                        <div className="detail">
                          <label>Remarks:</label>
                          <select
                            value={formState[tech].remarks}
                            onChange={(e) => handleRemarksChange(tech, e)}
                            style={{ backgroundColor: formState[tech].barColor }}
                          >
                            <option value="">Select</option>
                            <option value="very good" style={{ backgroundColor: '#4caf50' }}>Very Good</option>
                            <option value="good" style={{ backgroundColor: '#2196F3' }}>Good</option>
                            <option value="average" style={{ backgroundColor: '#FF9800' }}>Average</option>
                            <option value="poor" style={{ backgroundColor: '#F44336' }}>Poor</option>
                          </select>
                        </div>
                        <div className="detail">
                          <label>Strength:</label>
                          <textarea
                            rows="4"
                            value={formState[tech].strength}
                            onChange={(e) => handleInputChange(tech, 'strength', e)}
                          ></textarea>
                        </div>
                        <div className="detail">
                          <label>Weakness:</label>
                          <textarea
                            rows="4"
                            value={formState[tech].weakness}
                            onChange={(e) => handleInputChange(tech, 'weakness', e)}
                          ></textarea>
                        </div>
                        <div className="detail">
                          <label>Questions Asked:</label>
                          <textarea
                            rows="4"
                            value={formState[tech].questions}
                            onChange={(e) => handleInputChange(tech, 'questions', e)}
                          ></textarea>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </ThemeProvider>
  );
};

export default MainForm;
