import React from "react";
import Todo from "./Todo";

function TodoList({ todos, onRemove, onComplete, onEdit }) {
  return (
    <div className=" py-4 px-4">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onComplete={onComplete}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
