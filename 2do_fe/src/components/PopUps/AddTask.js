import React, { useState } from "react";
import AddTaskIcon from "./AddTaskIcon.svg";
import logo from "../../logo_2do.png";
import "./AddTask.css";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import taskActions from "../../redux/actions/task.actions";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

//Add Task Pop up screen

//Component for user changeable form
//User will be able to add task details and submit form
function TaskDescForm(props) {
  
  //initial state of the task details
  const [taskData, setTaskData] = useState({
    status: "in progress",
    title: "",
    description: "",
    dueDate: "",
  });

  const [dateValue, setDate] = useState(null);

  const dispatch = useDispatch();

  //handle state change of the date on user input 
  const handleDateChange = (newDateValue) => {
    setDate(newDateValue);
    setTaskData({
      ...taskData, 
      dueDate: newDateValue,});
  };

  //handle state change of the task data on user input 
  const handleChange = (e) => {
    setTaskData({ 
      ...taskData, [e.target.name]: e.target.value,
     });
  };

  //on submittion of the form, dispatch task data entered by the user
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
            value={taskData.title || ''}
            placeholder="Enter task title"
            onChange={handleChange}
          />

          {/* DESCRIPTION INPUT */}
          <label htmlFor="description">Description</label>
          <TextField
            className="textfieldstyle"
            type="text"
            name="description"
            value={taskData.description || ''}
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
              value = {dateValue || null}
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
            {/* ADD TASK SUBMIT BUTTON */}
            <button
              type = "submit"
              className="Add-button"
            >
              Confirm
            </button>
            {/* CLOSE FORM WITHOUT DOING ANYTHING */}
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
  //inital state of Add Task pop up screen
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        <div className="py-3 mb-2 justify-self-start pl-5 flex col-span-2 w-80 items-center ">
          <img
            src={AddTaskIcon}
            alt="Add task icon"
            //change state to open form on click
            onClick = {()=>{
              setIsOpen(true); 
              }}
            className="cursor-pointer"
          />
        </div>
      </div>
      
      {/* POP UP FORM TO ADD TASK */}
      {/* Open PopUp if isOpen = true */}
      { isOpen ? (
      <div className="taskDetailsPopUp">
        <center>
        <div className="taskForm">
          <div className="formContainer">
              {/* <FORM HEADER /> */}
              <header className="TaskForm-header">
                <p className="FormHeader-text">Add Task Details</p>
                <button onClick={()=>{setIsOpen(false)}} className="exit-button">
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
                <TaskDescForm trigger_1={isOpen} setTrigger_1={setIsOpen}/>
              </div>
            </div>
          </div>
        </center>
      {/* </PopUp> */}
      </div>):""
    }
    </>
  );
}

export default AddTask;
