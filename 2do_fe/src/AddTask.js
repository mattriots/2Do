import React from "react";
import logo from "./logo_2do.png";
import "./AddTask.css";

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
  return (
    <center>
      <div id="Form-container">
        <form>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="input-title"
            placeholder="Enter task title"
            // name = "title"
            // id = "title" />
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="input-desc"
            placeholder="Enter task description"
            // name = "Description"
            // id = "des" />
          />
          <label htmlFor="date">Date end</label>
          {/* need changes for date */}
          <input
            type="text"
            className="input-date"
            placeholder="Click here to choose date"
            // name = "date"
            // id = "date" />
          />
        </form>
      </div>
    </center>
  );
}

function TaskFormButtons() {
  return (
    <div className="Button-container">
      <button onClick="" className="Add-button">
        Confirm
      </button>
      <button onClick={closeTaskDesc} className="Cancel-button">
        Cancel
      </button>
    </div>
  );
}

function AddTask() {
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

export default AddTask;
