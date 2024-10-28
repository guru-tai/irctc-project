// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';

function TaskInput() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;
