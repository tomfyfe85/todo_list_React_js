import React, { useState } from "react";

const TodoList = () => {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [idCounter, setIdCounter] = useState(0);


  const addTodo = (event) => {
    event.preventDefault();
    setIdCounter(idCounter + 1);
    setTodos([...todos, { id: idCounter, todo: newTodo }]);
    setNewTodo("");
  };

  const deleteAll = () => {
    setTodos([])
  }
    

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
  console.log(todos);

  return (
    <div>
      <h1>Todo List</h1>
      <form
        onSubmit={addTodo}
      >
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
      <button onClick={deleteAll} id='delete'>
          DELETE ALL
        </button>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </div>
  );
};

export default TodoList;
