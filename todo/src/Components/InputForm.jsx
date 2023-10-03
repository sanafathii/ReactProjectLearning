import React, { useRef, useState } from "react";
import Input from "./Input";

function InputForm({ setTodos, todos }) {
  const [task, setTask] = useState({ title: "", desc: "" });
  const IdTask = useRef(0);
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setTask({ ...task, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (task.title.trim() === "" || task.desc.trim() === "") {
      return;
    }
    const newTask = {
      id: IdTask.current,
      title: task.title,
      desc: task.desc,
      completed: false,
    };

    setTodos([...todos, newTask]);
    IdTask.current++;
    setTask({ title: "", desc: "" });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          name="title"
          value={task.title}
          placeHolder="title"
          onChange={changeHandler}
        />
        <Input
          type="text"
          name="desc"
          value={task.desc}
          placeHolder="description"
          onChange={changeHandler}
        />

        <button
          className="bg-blue-500 text-blue-50 py-3 px-5 rounded-lg"
          type="submit"
        >
          Add new Task
        </button>
      </form>
    </div>
  );
}

export default InputForm;
