import React from "react";
import taskActions from "../../redux/actions/task.actions";
import { useDispatch } from "react-redux";
import { AddTaskLogo } from "../AddTask/AddTaskPopUp.js";
import { TaskDescForm } from "../AddTask/AddTaskPopUp.js";
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

function EditTaskFormButtons() {
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

export function Edit() {
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
            <EditTaskFormButtons />
          </body>
        </form>
      </div>
    </center>
  );
}

export default Edit;
