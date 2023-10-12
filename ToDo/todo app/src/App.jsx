import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Tasks from "./Components/Tasks";
import InputPage from "./Components/InputPage";
import EditPage from "./Components/EditPage";
import "react-datetime-picker/dist/DateTimePicker.css";
// import "./calendar-styles.css";
// import "./calendar-styles.scss";
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, settaskToEdit] = useState(null);
  //
  const removeHandler = (id) => {
    let filteredTasks = [...tasks];
    filteredTasks = filteredTasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const handleCheckbox = (taskId) => {
    const updatedTasks = [...tasks].map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(updatedTasks);
  };
  const editHandler = (task) => {
    settaskToEdit(task);
  };
  const saveHandler = (taskId, editedTaskData) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, ...editedTaskData };
      }
      return task;
    });

    setTasks(updatedTasks);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="inputpage"
          element={<InputPage setTasks={setTasks} tasks={tasks} />}
        />
        <Route
          path="EditPage"
          element={<EditPage taskToEdit={taskToEdit} onSave={saveHandler} />}
        />
        <Route
          path="/"
          element={
            <Tasks
              tasks={tasks}
              onRemove={removeHandler}
              onComplete={handleCheckbox}
              onEdit={editHandler}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
