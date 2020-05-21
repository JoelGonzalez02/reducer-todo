import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="App">
      <div className='header'>
          <h1>Reducer Todo App</h1>
      </div>
    
      <TodoContainer />
    </div>
  );
}

export default App;
