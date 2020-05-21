import React from 'react'



const TodoCard = (props) => {
  const { tasks } = props.tasks;

  return (
    <div className='todoContainer'>
      {tasks.map(task => {
        return (
          <div className="todoCard" id={task.id} >
            <div className='info'>
                 <h2>{task.item}</h2>
                 <p>Completed: {JSON.stringify(task.completed)}</p>
                 <button id={task.id} onClick={props.handleCompleted}>Task Completed</button> 
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TodoCard;





