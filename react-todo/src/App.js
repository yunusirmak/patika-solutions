import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <div className="todoapp">
      <Main />
      <footer className="info">
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a> - Recreated
          by Yunus Irmak
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
