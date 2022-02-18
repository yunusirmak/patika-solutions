function Footer({ itemCount, selected, onSelect, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemCount}</strong> items left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={selected === "all" ? "selected" : ""}
            onClick={() => onSelect("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={selected === "active" ? "selected" : ""}
            onClick={() => onSelect("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={selected === "completed" ? "selected" : ""}
            onClick={() => onSelect("completed")}
          >
            Completed
          </a>
        </li>
      </ul>
      <button onClick={() => clearCompleted()} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
