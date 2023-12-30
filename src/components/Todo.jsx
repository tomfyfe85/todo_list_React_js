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
      <div>
        Task:
        <br /> {todo}
      </div>
      <div>
        <MotivationQuote />
      </div>
      <button onClick={() => deleteTodo(id, todos, setTodos)}>Delete</button>
    </>
  );
};

export default Todo;
