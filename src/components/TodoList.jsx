import React, { useState, useEffect } from "react";
import Todo from "./Todo";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [idCounter, setIdCounter] = useState(1);
  // const [final, setFinal] = useState([]);
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
    // setFinal([]);
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  console.log("todos");
  console.log(todos);
  let sorted = [];
  // let arrayToLoop = final.length === 0 ? todos : final;

  const sorter = () => {
    console.log("sorter funct");

    todos.forEach((task, index) => {
      console.log(`index  ${index}`);
      console.log("sorted at top of loop");
      console.log([...sorted]);
      const isTrue = (el) => el.complete === true;

      let lastEl = sorted[sorted.length - 1];
      // console.log("lastEl");
      // console.log(lastEl?.complete);

      // console.log(`numTrue = ${numTrue}`)
      if (task.complete === false) {
        sorted.unshift(task);
        console.log("if");

        console.log("sorted if");
        console.log([...sorted]);
      }

      else if (lastEl?.complete === false && task.complete === true) {
        console.log("else if");
        sorted.push(task);
        console.log([...sorted]);

      }
      else {
        // console.log(`complete index ${index}`);
        console.log("else");

        console.log("sorted before splice");
        console.log([...sorted]);

        const numTrue = sorted.findIndex(isTrue);
        console.log(numTrue)
        sorted.splice(numTrue, 0, task);

        console.log(`index of first complete ${numTrue}`);

        console.log("sorted after splice");
        console.log([...sorted]);
      }
    });
    console.log("sorted after loop");
    console.log(sorted);
    // setFinal(sorted);
    return [...sorted]
  };
  const final = sorter()

  console.log("final");

  // console.log(final);

  // sorted.sort((a, b) => {
  //   if (!a.complete && b.complete) {
  //     return -1; // a comes first if it is completed and b is not
  //   } else if (a.complete && !b.complete) {
  //     return 1; // b comes first if it is completed and a is not
  //   } else {
  //     return 0; // maintain the existing order for other cases
  //   }
  // });

  // if task is false - unshift
  // else if the last element of the array is false and the task is true - push task
  // TAKE MORE BREAKS -

  //
  // console.log("sorted array");
  // console.log(sorted);
  // let incompleteArray = [];
  // const clearCompleted = () => {
  //   setCompleted([])
  // }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addTodo(event);
    sorter(event);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
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
        {final.map((todo) => (
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
    </div>
  );
};

export default TodoList;
