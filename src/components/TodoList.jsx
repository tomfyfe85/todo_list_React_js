import React, { useState } from "react";
import Todo from "./Todo";
import Order from "./Order";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [idCounter, setIdCounter] = useState(1);
  const [counter, setCounter] = useState(1);
  const [orderState, setOrderState] = useState([]);
  const addTodo = (event) => {
    event.preventDefault();
    if (newTodo === "") {
      return;
    }
    setTodos([
      ...todos,
      { id: idCounter, todo: newTodo, complete: false, trueCount: null },
    ]);
    setIdCounter(idCounter + 1);
    setNewTodo("");
  };

  const deleteAll = () => {
    setTodos([]);
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
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
      <div id="complete_box">
        <hr />
        {orderState.map((todo) => (
          <div key={todo.id}>
            <Todo
              id={todo.id}
              todo={todo.todo}
              todos={todos}
              setTodos={setTodos}
              completed={todo.complete}
              counter={counter}
              setCounter={setCounter}
            />
            <br />
          </div>
        ))}
      </div>

      <Order todos={todos} setOrder={setOrderState} />
    </div>
  );
};

export default TodoList;
