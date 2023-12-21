const Todo = ({ id, todo, todos, setTodos }) => {
  const deleteTodo = (id, todos, setTodos) => {
    // console.log('Delete todo')
    let deleted = [];
    todos.forEach((todo) => {
      if (todo.id != id) {
        deleted.push(todo);
      }
      setTodos(deleted);

    });
  };


  return (
    <>
      <div>{todo}</div>
      <button onClick={() => deleteTodo(id, todos, setTodos)}>Delete</button>
    </>
  );
};

export default Todo;
