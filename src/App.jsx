import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [task, setTask] = useState([]);

  const fieldChanged = (e) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    setTask([...task, { text}]);
    setText('');
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };
  const handleDelete = (index) => {
    const updatedTask = [...task];
    updatedTask.splice(index, 1);
    setTask(updatedTask);
  };
  return (
    <div className='container text-white bg-dark w-25 mx-auto'>
      <h1 className='title text-center'>Todo List</h1>
      <div className='input-container'>
        <input
          type="text"
          value={text}
          onChange={fieldChanged}
          onKeyDown={handleKeyDown}
          placeholder="Enter todo text"
        />
        <button onClick={addTodo} className='m-2'>Add Todo</button>
      </div>
      <div className='todo-list'>
        {task.map((x,index) => (
          <div key={index} className='d-flex m-2' >
            <input
              type='checkbox'
            />
            <h2 className='text-center'>{x.text}</h2>
            <button className='btn btn-danger m-2' onClick={handleDelete}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
