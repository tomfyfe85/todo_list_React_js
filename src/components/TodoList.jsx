import React, { useState } from "react";
import Todo from "./Todo";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [idCounter, setIdCounter] = useState(1);
  const [counter, setCounter] = useState(1);

  // const [final, setFinal] = useState([]);
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
    // setFinal([]);
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  let sorted = [];
  let sortFilter = todos
    .filter((task) => task.trueCount)
    .sort((a, b) => b.trueCount - a.trueCount);

  todos.forEach((task) => {
    if (task.complete === false) {
      sorted.unshift(task);
    } else {
      sortFilter.forEach((done) => {
        sorted.push(done);
      });
    }
  });

  // sorted.sort((a, b) => {
  //   if (!a.complete && b.complete) {
  //     return -1; // a comes first if it is completed and b is not
  //   } else if (a.complete && !b.complete) {
  //     return 1; // b comes first if it is completed and a is not
  //   } else {
  //     return 0; // maintain the existing order for other cases
  //   }
  // });

  // TAKE MORE BREAKS -
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
