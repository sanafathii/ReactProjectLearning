import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { MdOutlineModeEditOutline } from "react-icons/md";
//
import DateTimePicker from "react-datetime-picker";
function Tasks({ tasks, onRemove, onComplete, onEdit }) {
  const options = {
    month: "numeric",
    day: "numeric",
  };

  const [accodion, setAccordion] = useState([]);

  //
  const toggle = (taskId) => {
    if (accodion.includes(taskId)) {
      setAccordion(accodion.filter((id) => id !== taskId));
    } else {
      setAccordion([...accodion, taskId]);
    }
  };

  const handleEditClick = (task) => {
    onEdit(task);
  };

  return (
    <div className="container taskCon">
      <div className="todaysTask">
        <p className="text">today's tasks</p>
        {tasks.map((task) => {
          const isTaskExpanded = accodion.includes(task.id);
          const taskClassName = `task ${task.isCompleted ? "completed" : ""}`;
          return (
            <div className={`${taskClassName} task`} key={task.id}>
              <div className="title-task" onClick={() => toggle(task.id)}>
                <div>
                  <input
                    type="checkbox"
                    id={`checkbox-${task.id}`}
                    onChange={() => onComplete(task.id)}
                  />
                  <label htmlFor={`checkbox-${task.id}`}>
                    <span className="text-task">{task.text}</span>
                  </label>
                </div>
                <span className="date-text">
                  {new Date(task.date).toLocaleDateString(undefined, options)}
                </span>
              </div>

              {isTaskExpanded && (
                <div className="task-desc">
                  <span>{task.desc}</span>
                  <p>
                    <span onClick={() => onRemove(task.id)}>
                      <BsTrash />
                    </span>
                    <span>
                      <Link to="/EditPage">
                        <MdOutlineModeEditOutline
                          onClick={() => handleEditClick(task)}
                        />
                      </Link>
                    </span>
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Link to="/inputpage" className="link" style={{ textDecoration: "none" }}>
        <div className="addBtn">
          <span>+</span>
        </div>
      </Link>
    </div>
  );
}

export default Tasks;
