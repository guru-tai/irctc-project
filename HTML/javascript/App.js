// App.js
import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <h1>Simple To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
