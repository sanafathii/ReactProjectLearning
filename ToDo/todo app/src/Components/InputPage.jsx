import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import DateTimePicker from "react-datetime-picker";
// import "react-datetime-picker/dist/DateTimePicker.css";
// import "./Datepicker.scss";

import { BsArrowLeft } from "react-icons/bs";
//
function InputPage({ setTasks, tasks }) {
  const inputId = useRef(0);
  const initialInputValue = {
    text: "",
    desc: "",
    date: new Date(),
    isCompleted: false,
    id: inputId.current,
  };
  const [isClose, setIsClose] = useState(false);
  const [inputValue, setInputValue] = useState(initialInputValue);
  const addTaskHandel = () => {
    if (inputValue.text !== "" && inputValue.desc !== "") {
      const newTask = {
        text: inputValue.text,
        desc: inputValue.desc,
        date: inputValue.date,
        isCompleted: false,
        id: inputId.current,
      };
      const updatedTasks = [...tasks, newTask];
      updatedTasks.sort((a, b) => new Date(a.date) - new Date(b.date));
      setTasks(updatedTasks);
      setInputValue((prevState) => ({
        ...prevState,
        text: "",
        desc: "",

        date: new Date(),
        id: inputId.current + 1,
      }));
      inputId.current += 1;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container inputCon">
      <div className=" btn-section">
        <span
          className="close "
          onClick={() => setIsClose((prevClose) => !prevClose)}
        >
          <Link to="/">
            <BsArrowLeft />
          </Link>
        </span>
      </div>
      <div className="input-section">
        <Input
          type="text"
          className="input"
          placeholder="Enter New Task"
          name="text"
          value={inputValue.text}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          className="input"
          placeholder="Description...."
          name="desc"
          value={inputValue.desc}
          onChange={handleInputChange}
        />

        <div className="data">
          <span>
            {/* <DateTimePicker
              name="date"
              onChange={handleInputChange}
              value={inputValue.date}
            /> */}

            <Input
              type="date"
              name="date"
              value={inputValue.date}
              onChange={handleInputChange}
              placeholder="today"
            />
          </span>
        </div>
      </div>

      <div className="btn-section" onClick={addTaskHandel}>
        <button className="btn btn-task ">
          <span>Add New Task</span>
        </button>
      </div>
    </div>
  );
}

export default InputPage;
