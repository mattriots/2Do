import React from "react";
import logo from "../../logo_2do.png";
import "./AddTask.css";
import { DueDate } from "../Form/DueDate";
import { useDispatch } from "react-redux";
// import { Box } from "@mui/system";
import taskActions from "../../redux/actions/task.actions";
import TextField from "@mui/material/TextField";

//import dayjs from 'dayjs';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export function openTaskDesc() {
  document.getElementById("popUpForm").style.display = "block";
}

export function closeTaskDesc() {
  document.getElementById("popUpForm").style.display = "none";
}

export function TaskFormHeader() {
  return (
    <header className="TaskForm-header">
      <p className="FormHeader-text">Task Details</p>
      <button onClick={closeTaskDesc} className="exit-button">
        X
      </button>
    </header>
  );
}

export function AddTaskLogo() {
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

export function TaskDescForm() {
  return (
    <center>
      <div id="Form-container">
        <form>
          <label htmlFor="title">Title</label>
          {/* <input
        type="text"
        className="input-title"
        placeholder="Enter task title"
        // name = "title"
        // id = "title" />
      /> */}
          <TextField
            type="text"
            className="textfieldstyle"
            id="title"
            placeholder="Enter task title"
          />

          <label htmlFor="description">Description</label>
          <TextField
            type="text"
            className="textfieldstyle"
            id="des"
            placeholder="Enter task description"
            multiline
            rows={4}

            // name = "Description"
          />
          <DueDate />
        </form>
      </div>
    </center>
  );
}

export function TaskFormButtons() {
  const dispatch = useDispatch();

  return (
    <div className="Button-container">
      <button onClick="" className="Add-button">
        Confirm
      </button>
      <button
        onClick={() => dispatch(taskActions.deleteTask())}
        className="Cancel-button"
      >
        Delete
      </button>
    </div>
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
            {" "}
            {/* className="popup" */}
            <AddTaskLogo />
            <TaskDescForm />
            <TaskFormButtons />
          </body>
        </form>
      </div>
    </center>
  );
}

export default AddTaskPopUp;
