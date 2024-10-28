// src/App.js
import React from 'react';
import './App.css';
import EvaluationForm from './components/EvaluationForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interview Evaluation Form</h1>
      </header>
      <main>
        <EvaluationForm />
      </main>
    </div>
  );
}

export default App;
