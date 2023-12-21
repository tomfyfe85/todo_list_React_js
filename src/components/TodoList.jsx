import React, { useState } from "react";
import Todo from "./Todo";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [idCounter, setIdCounter] = useState(1);

  const addTodo = (event) => {
    event.preventDefault();
    setIdCounter(idCounter + 1);
    setTodos([...todos, { id: idCounter, todo: newTodo }]);
    setNewTodo("");
    console.log(todos)
};
  const deleteAll = () => {
    setTodos([]);
  };
  console.log(todos)

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <label htmlFor="addTodo">
          Add a todo:
          <input
            id="input"
            type="text"
            name="todo"
            value={newTodo}
            onChange={handleChange}
          />
        </label>
        <button type="submit" name="submit" id="submit">
          SUBMIT
        </button>
      </form>
      <button onClick={deleteAll} id="delete">
        DELETE ALL
      </button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo id={todo.id} todo={todo.todo} todos={todos} setTodos={setTodos} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
