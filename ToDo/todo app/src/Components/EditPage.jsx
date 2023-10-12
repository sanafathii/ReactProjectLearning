import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
// import "react-datetime-picker/dist/DateTimePicker.css";
// import "./Datepicker.scss";
import Input from "./Input";
function EditPage({ taskToEdit, onSave }) {
  const [editedTask, setEditedTask] = useState({
    text: "",
    desc: "",
    date: new Date(),
  });

  useEffect(() => {
    if (taskToEdit) {
      setEditedTask({
        text: taskToEdit.text,
        desc: taskToEdit.desc,
        date: new Date(taskToEdit.date),
      });
    }
  }, [taskToEdit]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSave = () => {
    onSave(taskToEdit.id, editedTask);
  };

  return (
    <div className="container EditCon  ">
      <h2 className="editiTitle">Edit Task</h2>
      <Input
        type="text"
        className="input"
        name="text"
        value={editedTask.text}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        className="input"
        name="desc"
        value={editedTask.desc}
        onChange={handleInputChange}
      />
      {/* <DateTimePicker
        onChange={handleInputChange}
        name="date"
        value={editedTask.date}
      /> */}
      <Input
        type="date"
        name="date"
        value={editedTask.date}
        onChange={handleInputChange}
      />
      <Link to="/">
        <button className="EditBtn" onClick={handleSave}>
          Save
        </button>
      </Link>
    </div>
  );
}

export default EditPage;
