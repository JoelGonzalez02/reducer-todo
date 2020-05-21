import React from 'react'

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" placeholder="Add a task" onChange={props.handleChange} value={props.input} />
        <button
          disabled={!props.input}
          onSubmit={props.handleSubmit}>Add a task</button>
      </form>
      <button onClick={props.handleClear} >Clear Completed</button>
    </div>
  )
}

export default TodoForm;




