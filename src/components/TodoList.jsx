import React, { useState } from "react";

const TodoList = () => {
  const todosArray = [
    { id: 1, todo: "todo 1" },
    { id: 2, todo: "todo 2" },
  ];
  const [todos, setTodos] = useState(todosArray);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    console.log('hi!')
  }.


  const handleChange = (event) => {
    setNewTodo(event.target.value)
  }

  console.log(newTodo)
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={() => addTodo()}>
        <label htmlFor="addTodo">
          Add a todo:
          <input type="todo" name="todo" value={newTodo} onChange={handleChange}/>
        </label>
        <button type="submit" name="submit">
          SUBMIT
        </button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </div>
  );
};

export default TodoList;
