import React, { useEffect, useState } from "react";
import logo from "../../logo_2do.png";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import taskActions from "../../redux/actions/task.actions";
import "../PopUps/EditTask.css";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


//Component for edit task pop up

//User will be able to edit task details and submit form

function closeTaskDesc() {
  document.getElementById("popUpEditForm").style.display = "none";
}

function TaskDescForm() {
  //use selector to get current task
  const singleTask = useSelector((state) => state.singleTask);
  const [dateValue, setDate] = useState(singleTask?.dueDate);


  const dispatch = useDispatch();

  //initial state of the task details
  const [taskData, setTaskData] = useState({
    status: "",
    title: "",
    description: "",
    dueDate: null,
  });

  const handleDateChange = (newDateValue) => {
    setDate(newDateValue);
    setTaskData({
      ...taskData, 
      dueDate: newDateValue,});
  };

  //only display tasks not null
  //set task data with specific task details
  useEffect(() => {
    setTaskData({
      status: singleTask?.status,
      title: singleTask?.title,
      description: singleTask?.description,
      dueDate: singleTask?.dueDate,
    });
  }, [singleTask]);

  //handle state change of the task data on user input 
  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };
  
  //on submittion of the form, dispatch task data for the task being edited by the user
  const handleSubmit = () => {
    closeTaskDesc;
    dispatch(taskActions.updateTaskById(taskData, singleTask._id));
  }

  return (
    <center>
      <div id="Form-container">
        <form onSubmit={handleSubmit}>
          {/* TITLE INPUT*/}
          <label htmlFor="title">Title</label>
          <TextField
            required
            className="textfieldstyle"
            type="text"
            name="title"
            value={taskData.title || ""}
            placeholder="Enter task title"
            onChange={handleChange}
          />

          {/* DESCRIPTION INPUT */}
          <label htmlFor="description">Description</label>
          <TextField
            className="textfieldstyle"
            type="text"
            name="description"
            value={taskData.description || ""}
            placeholder="Enter task description"
            multiline
            rows={4}
            onChange={handleChange}
          />

          {/* DATE INPUT */}
          <label htmlFor="date">Due Date</label>
          <LocalizationProvider dateAdapter = {AdapterDayjs}>
            <DesktopDatePicker
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
            {/* EDIT TASK SUBMIT BUTTON */}
            <button
              type = "submit"
              className="Add-button"
            >
              Confirm
            </button>
            {/* Button delete the selected task */}
            <button
              className="Cancel-button"
              onClick={() => {
                // e.preventDefault();
                dispatch(taskActions.deleteTask(singleTask._id));
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
    /* POP UP FORM TO EDIT TASK */
    <div className="editTaskPopUp">
    <center>
      <div className="edittaskForm" id = "popUpEditForm">
        <div className="editformContainer">
          {/* FORM HEADER */}
          <header className="TaskForm-header">
            <p className="FormHeader-text">Edit Task Details</p>
            <button onClick={closeTaskDesc} className="exit-button">
              X
            </button>
          </header>

          <div>
            {/* SPINNING LOGO */}
            <center>
              <div id="logo-container">
                <div className="AddTask-Logo">
                  <img src={logo} className="AddTask-logo" alt="logo" />
                </div>
              </div>
            </center>

            {/* INPUT FORM */}
            <TaskDescForm/>
          </div>
        </div>
      </div>
    </center>
    </div>
  );
}

export default Edit;
