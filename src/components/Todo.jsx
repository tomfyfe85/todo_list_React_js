import MotivationQuote from "./MotivationQuote";

const Todo = ({ id, todo, todos, setTodos, completed}) => {
  const deleteTodo = (id, todos, setTodos) => {
    // console.log('Delete todo')
    let deleted = [];
    todos.forEach((task) => {
      if (task.id != id) {
        deleted.push(task);
      }
      setTodos(deleted);
    });
  };

  const changeValue = (id, todos, setTodos) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    console.log('updated todos')
    console.log(updatedTodos)
    setTodos(updatedTodos);
  };
  
  const boxStyles = {
    backgroundColor: 'white',
    border: completed? '2px solid green' : '2px solid red'
  };

  return (
    <div style={boxStyles}>
      <br />
      <p id = 'task'>Task:</p>
      <p id = 'task'>{todo}</p>
      <MotivationQuote />
      <button onClick={() => deleteTodo(id, todos, setTodos)}>Delete</button>
      <button onClick={() => changeValue(id, todos, setTodos)}>
        <b>{completed === true ? 'Mark Incomplete' : 'Mark complete'}</b>
      </button>
    </div>
  );
};

export default Todo;
