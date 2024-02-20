import React, { useState } from "react";
import Todo from "./Todo";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [idCounter, setIdCounter] = useState(1);
  const [counter, setCounter] = useState(1);
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

  //  Make into a component  
  const order = todos.sort((a, b) => b.trueCount - a.trueCount);
  console.log(order)
  let sorted = [];
  order.forEach((task) => {
    task.complete === false ? sorted.unshift(task) : sorted.push(task);
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
        </label>~
        <button type="submit" name="submit" id="submit">
          SUBMIT
        </button>
      </form>
      <button onClick={deleteAll} id="delete">
        DELETE ALL
      </button>
      <div id="complete_box">
        <hr />
        {sorted.map((todo) => (
          <div key={todo.id}>
            <Todo
              id={todo.id}
              todo={todo.todo}
              todos={todos}
              setTodos={setTodos}
              completed={todo.complete}
              trueCount={null}
              counter={counter}
              setCounter={setCounter}
            />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
