import React, { useState } from "react";
import Todo from "./Todo";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [idCounter, setIdCounter] = useState(1);

  const addTodo = (event) => {
    event.preventDefault();
    if (newTodo === "") {
      return;
    }
    setTodos([...todos, { id: idCounter, todo: newTodo, complete: false }]);
    setIdCounter(idCounter + 1);
    setNewTodo("");
  };

  const deleteAll = () => {
    setTodos([]);
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const completedArray = [];
  const incompleteArray = [];
  todos.forEach((todo) => {
    if (todo.complete) {
      completedArray.push(todo);
    } else {
      incompleteArray.push(todo);
    }
  });

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <label htmlFor="addTodo">
          Add a task:
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

      <p>COMPLETE</p>
      {completedArray.map((todo) => (
        <div key={todo.id}>
          <Todo
            id={todo.id}
            todo={todo.todo}
            todos={todos}
            setTodos={setTodos}
            completed={todo.complete}
          />
        </div>
      ))}

      <p>INCOMPLETE</p>
      {incompleteArray.map((todo) => (
        <div key={todo.id}>
          <Todo
            id={todo.id}
            todo={todo.todo}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
