import { useState } from "react";
import "./App.css";
import InputForm from "./Components/InputForm";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const removeHandler = (id) => {
    const removedList = todos.filter((todo) => todo.id != id);
    setTodos(removedList);
  };
  const CommentHandler = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };
  const editHandler = (id) => {
    const foundTodo = todos.find((todo) => todo.id === id);
    setEditTodo(foundTodo);
  };
  return (
    <div className="flex justify-between mx-auto  w-[750px] mt-40">
      <InputForm setTodos={setTodos} todos={todos} />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        onRemove={removeHandler}
        onComplete={CommentHandler}
        onEdit={editHandler}
      />
    </div>
  );
}

export default App;
