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

  return (
    <>
      <br/>
        Task:
        <br /> {todo}
        <MotivationQuote />
      <button onClick={() => deleteTodo(id, todos, setTodos)}>Delete</button>
      <hr/>
    </>
  );
};

export default Todo;
