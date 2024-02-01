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
  console.log('todos')
  console.log(todos)
  todos.forEach((task, index) => {
    console.log(`index  ${index}`);
    // const isTrue = (el) => el.complete === true;
    
    // console.log(`numTrue = ${numTrue}`)

    

    if (task.complete === false) {
      sorted.unshift(task);
      console.log('if')

    //   console.log('sorted if')
    //   console.log(sorted)
    } else if (sorted[-1].complete === false && task.complete === true) {
      // 'sorted[-1].complete needs to change - use this method let lastElement = myArray[myArray.length - 1];'
    //   console.log('else if')
      // sorted.push(task)
      let lastElement = sorted[myArray.length - 1]
    } 
    // else {
  
  //   // console.log(`complete index ${index}`);
  
    //   console.log('sorted before splice')
  //   console.log(sorted)
  
    //   const numTrue = sorted.findIndex(isTrue);
  //   console.log(`index of first complete ${numTrue}`);
  
  //   sorted.splice(numTrue, 0, task)
  
    //   console.log('sorted after splice')
    //   console.log(sorted)


    // }
  });

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
            />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
