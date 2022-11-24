import React, { useState } from "react";
import AddTaskIcon from "./AddTaskIcon.svg";
import PopUp from "./PopUp";
import logo from "../../logo_2do.png";
import "./AddTask.css";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import taskActions from "../../redux/actions/task.actions";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function TaskDescForm(props) {
  
  const [taskData, setTaskData] = useState({
    status: "in progress",
    title: "",
    description: "",
    dueDate: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTrigger_1(false);
    dispatch(taskActions.addTask(taskData));
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
            value={taskData.title}
            placeholder="Enter task title"
            onChange={handleChange}
          />

          {/* DESCRIPTION INPUT */}
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
            <button
              type = "submit"
              className="Add-button"
            >
              Confirm
            </button>
            <button onClick={()=>props.setTrigger_1(false)} className="Cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </center>
  );
}

function AddTask() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        <div className="py-3 mb-2 justify-self-start pl-5 flex col-span-2 w-80 items-center ">
          <img
            src={AddTaskIcon}
            alt="Add task icon"
            onClick = {()=>{setIsOpen(true)}}
            className="cursor-pointer"
          />
        </div>
      </div>
      
      <div className="addTaskPopUp">
      <PopUp trigger={isOpen} setTrigger={setIsOpen}>
        <center>
        <div className="taskForm">
          <div className="formContainer">
              {/* <FORM HEADER /> */}
              <header className="TaskForm-header">
                <p className="FormHeader-text">Task Details</p>
                <button onClick={()=>{setIsOpen(false)}} className="exit-button">
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
                <TaskDescForm trigger_1={isOpen} setTrigger_1={setIsOpen}/>
              </body>
            </div>
          </div>
        </center>
      </PopUp>
      </div>
      {/* } */}
    </>
  );
}

export default AddTask;
