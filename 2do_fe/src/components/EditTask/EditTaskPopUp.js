import React from "react";
import { AddTaskLogo } from "../AddTask/AddTaskPopUp.js";
import { TaskDescForm } from "../AddTask/AddTaskPopUp.js";
import { TaskFormButtons } from "../AddTask/AddTaskPopUp.js";
import { closeTaskDesc } from "../AddTask/AddTaskPopUp.js";

export function openEditDesc() {
  console.log("hello");
  document.getElementById("popUpEditForm").style.display = "block";
}

function EditTaskFormHeader() {
  return (
    <header className="TaskForm-header">
      <p className="FormHeader-text">Edit Task Details</p>
      <button onClick={closeTaskDesc} className="exit-button">
        X
      </button>
    </header>
  );
}

export function Edit() {
  console.log("component");
  return (
    <center>
      <div id="popUpEditForm">
        <form action="" className="formContainer">
          <h2>
            <EditTaskFormHeader />
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

export default Edit;
