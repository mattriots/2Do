import React, { useState } from "react";
import logo from "../../logo_2do.png";
import "../PopUps/AddTask.css";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import taskActions from "../../redux/actions/task.actions";

export function openEditDesc(task) {
  console.log(task._id);
  //fetch get current task -> store single task
  document.getElementById("popUpEditForm").style.display = "block";

  const dispatch = useDispatch();
  dispatch(taskActions.getTaskById(task._id));
}

function closeTaskDesc() {
  document.getElementById("popUpEditForm").style.display = "none";
}

export function TaskFormHeader() {
  return (
    <header className="TaskForm-header">
      <p className="FormHeader-text">Edit Task Details</p>
      <button onClick={closeTaskDesc} className="exit-button">
        X
      </button>
    </header>
  );
}

function EditTaskLogo() {
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
  //use selector to get current task Id
  //const singleTask = useSelector((state) => state.singleTask);

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
            <button className="Cancel-button">Delete</button>
          </div>
        </form>
      </div>
    </center>
  );
}

export function Edit() {
  return (
    <center>
      <div className="taskForm" id="popUpEditForm">
        <form action="" className="formContainer">
          <h2>
            <TaskFormHeader />
          </h2>
          <body>
            <EditTaskLogo />
            <TaskDescForm />
          </body>
        </form>
      </div>
    </center>
  );
}

export default Edit;
