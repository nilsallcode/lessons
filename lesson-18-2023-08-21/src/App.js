import { useState, useEffect } from "react";

import './App.css';
import Button from "./components/Button";
import TodoItem from "./components/TodoItem";

function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  useEffect(() => {
    console.log("test");
  }, []);

  useEffect(() => {
    console.log("Todo state changed");
  }, [todos]);

  return (
    <>
      <div className="header">
        <h1>Todo List</h1>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add item..." />
        <Button onClick={addTodo} text="Add Item" />
      </div>
      <hr />
      <div className="todo-items">
        {todos.map((todo, index) => {
          <TodoItem text={todo} key={index} />
        })}
      </div>
    </>
  );
}

export default App;





{todos.map((todo, index) => (
  <TodoItem text={todo} key={index} />
))}