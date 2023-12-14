// import React, { useState, useEffect } from "react";

// const TodoList = () => {
//   const todosArray = [
//     { id: 1, todo: "todo 1" },
//     { id: 2, todo: "todo 2" },
//   ];
//   const [todos, setTodos] = useState(todosArray);
//   const [newTodo, setNewTodo] = useState("");
//   const [idCounter, setIdCounter] = useState(3);
//   // const addTodo = (newTodo, setTodos, todos) => {
//   //   setTodos([...todos, { id: 3, todo: newTodo }]);
//   // ()=>addTodo(newTodo, setTodos, todos)
//   // };

//   const addTodo = (
//     event,
//     newTodo,
//     todos,
//     setTodos,
//     idCounter,
//     setIdCounter
//   ) => {
//     event.preventDefault();
//     setTodos([...todos, { id: idCounter, todo: newTodo }]);
//     setIdCounter(idCounter + 1);
//     setNewTodo("");
//   };

//   const handleChange = (event) => {
//     setNewTodo(event.target.value);
//   };
//   console.log(todos);

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <form
//         onSubmit={() =>
//           addTodo(event, newTodo, todos, setTodos, idCounter, setIdCounter)
//         }
//       >
//         <label htmlFor="addTodo">
//           Add a todo:
//           <input
//             type="todo"
//             name="todo"
//             value={newTodo}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit" name="submit">
//           SUBMIT
//         </button>
//       </form>
//       {todos.map((todo) => (
//         <div key={todo.id}>{todo.todo}</div>
//       ))}
//     </div>
//   );
// };

// export default TodoList;
