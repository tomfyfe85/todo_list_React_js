import React, { useState } from 'react'

const PracticeTodo = () => {
const todoArray = [{id:1, todo:"todo 1"}, {id:2, todo:"todo 2"}]

const [todos, setTodos] = useState(todoArray)
const [inputValue, setInputValue] = useState("")
  
  const add = (event, setTodos) => {
    event.preventDefault()

    setTodos([...todos, {
      id: 3, todo: inputValue
    }])
    // console.log(todos)

  }
  console.log(todos)

  const handleChange = (event) => {
    setInputValue(event.target.value)
  };
  
  return (<>
    <h1>Practice Todo</h1>
    <form onSubmit={() => add(setTodos)}>
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