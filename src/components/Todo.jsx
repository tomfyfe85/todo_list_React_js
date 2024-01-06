import MotivationQuote from "./MotivationQuote";

const Todo = ({ id, todo, todos, setTodos }) => {
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
    setTodos(updatedTodos);
  };

  return (
    <>
      <br />
      Task:
      <br /> {todo}
      <MotivationQuote />
      <button onClick={() => deleteTodo(id, todos, setTodos)}>Delete</button>
      <button onClick={() => changeValue(id, todos, setTodos)}>
        Mark Complete
      </button>
      <hr />
    </>
  );
};

export default Todo;
