import React, { useReducer, useState } from 'react';
import {reducer, initialState} from '../reducers/reducer';
import TodoCard from './TodoCard';
import TodoForm from './TodoForm';

export default function TodoContainer() {


  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');


  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleClear = () => {
    dispatch({ type: 'CLEAR' })
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD', payload: input })
    setInput('')
  }

  const handleCompleted = e => {
    dispatch({ type: 'COMPLETED', payload: e.target.id })
  }


  return (
    <div>
      <TodoForm handleSubmit={handleSubmit} handleChange={handleChange} input={input} handleClear={handleClear} />
      <TodoCard tasks={state} handleCompleted={handleCompleted} />
    </div>
  )
}


