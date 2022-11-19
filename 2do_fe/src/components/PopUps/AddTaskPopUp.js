import React, { useState } from "react";
import logo from "../../logo_2do.png";
import "./AddTask.css";

//import { DueDate } from "../Form/DueDate";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import taskActions from "../../redux/actions/task.actions";

export function openTaskDesc() {
  document.getElementById("popUpForm").style.display = "block";
}

function closeTaskDesc() {
  document.getElementById("popUpForm").style.display = "none";
}

function TaskFormHeader() {
  return (
    <header className="TaskForm-header">
      <p className="FormHeader-text">Task Details</p>
      <button onClick={closeTaskDesc} className="exit-button">
        X
      </button>
    </header>
  );
}

function AddTaskLogo() {
  return (
    <center>
      <div id="logo-container">
        <div className="AddTask-Logo">
          <img src={logo} className="AddTask-logo" alt="logo" />
        </div>
      </div>
    </center>
  );
}

function TaskDescForm() {
  const [taskData, setTaskData] = useState({
    status: "in progress",
    title: "",
    description: "",
    dueDate: null,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  return (
    <center>
      <div id="Form-container">
        <form>
          <label htmlFor="title">Title</label>
          <TextField
            required
            className="textfieldstyle"
            type="text"
            name="title"
            value={taskData.title}
            placeholder="Enter task title"
            onChange={handleChange}
          />

          <label htmlFor="description">Description</label>
          <TextField
            className="textfieldstyle"
            type="text"
            name="description"
            value={taskData.description}
            placeholder="Enter task description"
            multiline
            rows={4}
            onChange={handleChange}
          />

          {/* <DueDate /> */}
          <label htmlFor="date">Due Date</label>
          <TextField
            className="textfieldstyle"
            type="text"
            name="dueDate"
            placeholder="MM/DD/YYYY"
            value={taskData.dueDate}
            onChange={handleChange}
          />

          <div className="Button-container">
            <button
              onClick={() => {
                dispatch(taskActions.addTask(taskData));
              }}
              className="Add-button"
            >
              Confirm
            </button>
            <button onClick={closeTaskDesc} className="Cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </center>
  );
}

function AddTaskPopUp() {
  return (
    <center>
      <div className="taskForm" id="popUpForm">
        <form action="" className="formContainer">
          <h2>
            <TaskFormHeader />
          </h2>
          <body>
            <AddTaskLogo />
            <TaskDescForm />
          </body>
        </form>
      </div>
    </center>
  );
}

export default AddTaskPopUp;