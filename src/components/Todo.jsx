import MotivationQuote from "./MotivationQuote";
import React, { useEffect, useState } from "react";

const Todo = ({
  id,
  todo,
  todos,
  setTodos,
  completed,
  trueCount,
  counter,
  setCounter,
}) => {
  console.log(counter);
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

  const changeValue = (id, todos, setTodos, trueCount) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, complete: true, trueCount: counter };
      }
      return todo;
    });
    console.log(`true count ${counter}`);
    console.log("updated todos");
    console.log(updatedTodos);
    setTodos(updatedTodos);
  };

  const handleChange = () => {
    changeValue(id, todos, setTodos, trueCount);
    let score = counter + 1;
    console.log(`counter in hanglechange ${score}`);

    setCounter(score);
  };

  const boxStyles = {
    backgroundColor: "white",
    border: completed ? "2px solid green" : "2px solid red",
  };

  return (
    <div style={boxStyles}>
      <br />
      <p id="task">Task:</p>
      <p id="task">{todo}</p>
      <MotivationQuote />
      <button onClick={() => deleteTodo(id, todos, setTodos)}>Delete</button>
      <button onClick={handleChange}>
        <b>{completed === true ? "Mark Incomplete" : "Mark complete"}</b>
      </button>
    </div>
  );
};

export default Todo;
