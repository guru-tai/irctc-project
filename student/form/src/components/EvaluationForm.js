// src/components/EvaluationForm.js
import React, { useState } from 'react';

const EvaluationForm = () => {
  const [formData, setFormData] = useState({
    candidateName: '',
    interviewDate: '',
    employabilityScore: '',
    fullStackScore: '',
    interviewTime: '',
    batch: '',
    branch: '',
    testScore: '',
    html: '',
    css: '',
    javascriptFundamentals: '',
    javascriptExpert: '',
    react: '',
    coreJava: '',
    advJava: '',
    spring: '',
    hibernate: '',
    mySQL: '',
    problemSolving: '',
    dsa: '',
    project: '',
    communication: '',
    remarks: '',
    strength: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Evaluation Form</h2>
      <label>
        Candidate Name:
        <input type="text" name="candidateName" value={formData.candidateName} onChange={handleChange} />
      </label>
      <label>
        Interview Date:
        <input type="date" name="interviewDate" value={formData.interviewDate} onChange={handleChange} />
      </label>
      <label>
        Generic Employability Score:
        <input type="number" name="employabilityScore" value={formData.employabilityScore} onChange={handleChange} />
      </label>
      <label>
        Full Stack Employability Score:
        <input type="number" name="fullStackScore" value={formData.fullStackScore} onChange={handleChange} />
      </label>
      <label>
        Total Interview Time:
        <input type="text" name="interviewTime" value={formData.interviewTime} onChange={handleChange} />
      </label>
      <label>
        Batch:
        <input type="text" name="batch" value={formData.batch} onChange={handleChange} />
      </label>
      <label>
        Branch / Stream:
        <input type="text" name="branch" value={formData.branch} onChange={handleChange} />
      </label>
      <label>
        Test Score:
        <input type="number" name="testScore" value={formData.testScore} onChange={handleChange} />
      </label>
      <label>
        HTML:
        <input type="number" name="html" value={formData.html} onChange={handleChange} />
      </label>
      <label>
        CSS:
        <input type="number" name="css" value={formData.css} onChange={handleChange} />
      </label>
      <label>
        JavaScript Fundamentals:
        <input type="number" name="javascriptFundamentals" value={formData.javascriptFundamentals} onChange={handleChange} />
      </label>
      <label>
        JavaScript Expert:
        <input type="number" name="javascriptExpert" value={formData.javascriptExpert} onChange={handleChange} />
      </label>
      <label>
        React:
        <input type="number" name="react" value={formData.react} onChange={handleChange} />
      </label>
      <label>
        Core Java:
        <input type="number" name="coreJava" value={formData.coreJava} onChange={handleChange} />
      </label>
      <label>
        Adv Java:
        <input type="number" name="advJava" value={formData.advJava} onChange={handleChange} />
      </label>
      <label>
        Spring:
        <input type="number" name="spring" value={formData.spring} onChange={handleChange} />
      </label>
      <label>
        Hibernate:
        <input type="number" name="hibernate" value={formData.hibernate} onChange={handleChange} />
      </label>
      <label>
        MySQL:
        <input type="number" name="mySQL" value={formData.mySQL} onChange={handleChange} />
      </label>
      <label>
        Problem Solving:
        <input type="number" name="problemSolving" value={formData.problemSolving} onChange={handleChange} />
      </label>
      <label>
        DSA:
        <input type="number" name="dsa" value={formData.dsa} onChange={handleChange} />
      </label>
      <label>
        Project:
        <input type="number" name="project" value={formData.project} onChange={handleChange} />
      </label>
      <label>
        Communication:
        <input type="number" name="communication" value={formData.communication} onChange={handleChange} />
      </label>
      <label>
        Remarks:
        <textarea name="remarks" value={formData.remarks} onChange={handleChange} />
      </label>
      <label>
        Strength:
        <textarea name="strength" value={formData.strength} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EvaluationForm;
