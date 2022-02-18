import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
function Main() {
  const [selected, setSelected] = useState("all");
  const [currentTodo, setCurrentTodo] = useState({
    item: "",
    isCompleted: false,
  });
  const [todos, setTodos] = useState([
    { item: "Add a task", isCompleted: false },
  ]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, currentTodo]);
    setCurrentTodo({ item: "", isCompleted: false });
  };
  function handleRemove(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function handleCompleted(index) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  function clearCompleted() {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (todo.isCompleted) {
        newTodos.splice(index, 1);
      }
    });
    setTodos(newTodos);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <>
      <Header />
      <section className="main">
        <form onSubmit={handleSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={currentTodo.item}
            onChange={(e) =>
              setCurrentTodo({ ...currentTodo, item: e.target.value })
            }
            autofocus
          />
        </form>
        <ul className="todo-list">
          {selected === "all"
            ? todos.map((todo, index) => (
                <li
                  key={index}
                  className={todo.isCompleted === true && "completed"}
                >
                  <div className="view">
                    <input
                      className="toggle"
                      type="checkbox"
                      onClick={() => handleCompleted(index)}
                    />
                    <label>{todo.item}</label>
                    <button
                      onClick={() => handleRemove(index)}
                      className="destroy"
                    ></button>
                  </div>
                </li>
              ))
            : selected === "active"
            ? todos
                .filter((todo) => todo.isCompleted !== true)
                .map((todo, index) => (
                  <li
                    key={index}
                    className={todo.isCompleted === true && "completed"}
                  >
                    <div className="view">
                      <input
                        className="toggle"
                        type="checkbox"
                        onClick={() => handleCompleted(index)}
                      />
                      <label>{todo.item}</label>
                      <button
                        onClick={() => handleRemove(index)}
                        className="destroy"
                      ></button>
                    </div>
                  </li>
                ))
            : todos
                .filter((todo) => todo.isCompleted !== false)
                .map((todo, index) => (
                  <li
                    key={index}
                    className={todo.isCompleted === true && "completed"}
                  >
                    <div className="view">
                      <input
                        className="toggle"
                        type="checkbox"
                        onClick={() => handleCompleted(index)}
                      />
                      <label>{todo.item}</label>
                      <button
                        onClick={() => handleRemove(index)}
                        className="destroy"
                      ></button>
                    </div>
                  </li>
                ))}
        </ul>
      </section>
      <Footer
        itemCount={todos.length}
        selected={selected}
        onSelect={setSelected}
        clearCompleted={clearCompleted}
      />
    </>
  );
}

export default Main;
