import { useState, useEffect } from "react";
function Main() {
  const [currentTodo, setCurrentTodo] = useState({
    item: "",
    isCompleted: false,
  });
  const [todos, setTodos] = useState([{ item: "yunus", isCompleted: false }]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, currentTodo]);
    setCurrentTodo({ item: "", isCompleted: false });
    console.log("wow");
  };
  useEffect(() => {
    console.log(currentTodo);
  }, [currentTodo]);
  return (
    <section className="main">
      <input
        className="toggle-all"
        placeholder="Mark all as complete"
        type="checkbox"
        value={currentTodo}
        onChange={console.log("anything")}
      />
      <button type="submit"></button>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.isCompleted == true && "completed"}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{todo.item}</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Main;
