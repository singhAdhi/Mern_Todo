import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      let response = await fetch("http://localhost:8000/todo");
      let data = await response.json();
      console.log(data);
      setTodos(data.todos); // Accessing the 'todos' property in the fetched data
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  return (
    <>
      <CreateTodo />
      {todos.map((todo) => (
        <div key={todo._id}>
          <p>Title: {todo.title}</p>
          <p>Description: {todo.description}</p>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        </div>
      ))}
    </>
  );
}

export default App;
