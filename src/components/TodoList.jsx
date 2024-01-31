import React, { useState } from "react";
import Todo from "./Todo";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [idCounter, setIdCounter] = useState(1);
  // const [completed, setCompleted] = useState([])
  // const [incompleted, setinCompleted] = useState([])
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

  let sorted = [];

  todos.forEach((task, index) => {
    if (task.complete === false) {
      sorted.unshift(task);
    } else if (task.complete === true) {
      sorted.push(task);
    } 
    // if (todos[-1].completed != false) {
    //   sorted.push(task)
    // }
  });

  // let incompleteArray = [];
  // const clearCompleted = () => {
  //   setCompleted([])
  // }

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
      {/* <button onClick={clearCompleted} id="delete">
        Clear Completed
      </button>
      <button onClick={deleteAll} id="delete">
        Clear Incompleted
      </button> */}
      <button onClick={deleteAll} id="delete">
        DELETE ALL
      </button>

      <div id="complete_box">
        {/* <h2 id="complete">COMPLETE</h2> */}
        <hr />
        {sorted.map((todo) => (
          <div key={todo.id}>
            <Todo
              id={todo.id}
              todo={todo.todo}
              todos={todos}
              setTodos={setTodos}
              completed={todo.complete}
            />
            <br />
          </div>
        ))}
      </div>
      {/* <hr /> */}
      {/* <h2 id="incomplete">INCOMPLETE</h2> */}
      {/* <hr /> */}
      {/* {incompleteArray.map((todo) => (
        <div key={todo.id}>
          <Todo
            id={todo.id}
            todo={todo.todo}
            todos={todos}
            setTodos={setTodos}
          />
          <br />
        </div>
      ))} */}
    </div>
  );
};

export default TodoList;
