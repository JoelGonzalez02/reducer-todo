

const initialState = {
  tasks: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 0
    },
    {
      item: "Eat dinner",
      completed: false,
      id: 1
    }
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { tasks: [...state.tasks, { item: action.payload, id: Date.now(), completed: false }] }

    case 'COMPLETED':
      return { tasks: state.tasks.map(task => { return Number(task.id) === Number(action.payload) ? { item: task.item, id: task.id, completed: !task.completed } : task }) }

    case 'CLEAR':
      return {
        tasks: state.tasks.filter(task => {
          return task.completed === false;
        })
      };

    default:
      return state;
  }
}

export { reducer, initialState };



