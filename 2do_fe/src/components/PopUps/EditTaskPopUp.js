import React, { useState } from "react";
import logo from "../../logo_2do.png";
// import "../PopUps/AddTask.css";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import taskActions from "../../redux/actions/task.actions";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

var id = 0;
export function openEditDesc(task) {
  id = task._id;
  document.getElementById("popUpEditForm").style.display = "block";
}

function closeTaskDesc() {
  document.getElementById("popUpEditForm").style.display = "none";
}

function TaskDescForm() {
  //use selector to get current task Id
  //const singleTask = useSelector((state) => state.singleTask);
  //dispatch(taskActions.getTaskById(id));
  //console.log(singleTask);

  const [taskData, setTaskData] = useState({
    status: "in progress",
    title: "",
    description: "",
    dueDate: null,
  });

  const [dateValue, setDate] = useState(null);

  const dispatch = useDispatch();

  const handleDateChange = (newDateValue) => {
    setDate(newDateValue);
    setTaskData({
      ...taskData, 
      dueDate: newDateValue,});
  };

  const handleChange = (e) => {
    setTaskData({ 
      ...taskData, [e.target.name]: e.target.value,
     });
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

          {/* DATE INPUT */}
          <label htmlFor="date">Due Date</label>
          <LocalizationProvider dateAdapter = {AdapterDayjs}>
            <DesktopDatePicker
              //label = "Due Date"
              inputFormat = "MM/DD/YYYY"
              value = {dateValue}
              onChange = {handleDateChange}
              renderInput = {
                (params) => 
                <TextField 
                name = "dueDate"
                {...params}
                className="textfieldstyle" 
                id="duedate"
                />
              }
              />
          </LocalizationProvider>

          <div className="Button-container">
            {/* Need to change this to edit task */}
            <button
              onClick={() => {
                dispatch(taskActions.addTask(taskData));
              }}
              className="Add-button"
            >
              Confirm
            </button>
            <button
              className="Cancel-button"
              onClick={() => {
                dispatch(taskActions.deleteTask(id));
                window.location.reload();
              }}
            >
              Delete
            </button>
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
          {/* <FORM HEADER /> */}
          <header className="TaskForm-header">
            <p className="FormHeader-text">Task Details</p>
            <button onClick={closeTaskDesc} className="exit-button">
              X
            </button>
          </header>
          
          <body>
            {/* SPINNING LOGO */}
            <center>
              <div id="logo-container">
                <div className="AddTask-Logo">
                  <img src={logo} className="AddTask-logo" alt="logo" />
                </div>
              </div>
            </center>

            {/* INPUT FORM */}
            <TaskDescForm />
          </body>
        </form>
      </div>
    </center>
  );
}

export default Edit;
