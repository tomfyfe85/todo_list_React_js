import React, { useState } from 'react'

const PracticeTodo = () => {
const todoArray = [{id:1, todo:"todo 1"}, {id:2, todo:"todo 2"}]

const [todos, setTodos] = useState(todoArray)
const [inputValue, setInputValue] = useState("")
  
  const add = (event) => {
    event.preventDefault()

 const todo = [...todos, {
    id: 3, todo: inputValue
  }]
    setTodos(todo)

  }


  console.log(todos)


  const handleChange = (event) => {
    setInputValue(event.target.value)
  };
  
  return (<>
    <h1>Practice Todo</h1>
    <form onSubmit={add}>
      <label htmlFor="addTodo">
        Add a TodoList
        <input type='todo' name='submit' value={inputValue} onChange={handleChange}/>
      </label>
      <label>
        <button type = "submit" name ="submit">
          Submit
        </button>
      </label>
    </form>
    {todos.map((todo) => (
      <div key={todo.id}>
        {todo.todo}
      </div>
    ))}
  </>);
};
export default PracticeTodo;