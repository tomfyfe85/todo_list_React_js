const PracticeTodo = () => {
const todoArray = [{id:1, todo:"todo 1"}, {id:2, todo:"todo 2"}]

  return (<>
    <h1>Practice Todo</h1>
    {todoArray.map((todo) => (
      <div key={todo.id}>
        {todo.todo}
      </div>
    ))}
  </>);
};
export default PracticeTodo;