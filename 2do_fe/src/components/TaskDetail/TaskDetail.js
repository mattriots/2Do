import React, { useState } from "react";
import ProgressIcon from "./ProgressIcon.svg";
import FinishIcon from "./FinishIcon.svg";
import StatusButton from "../Done/StatusButton.js";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import taskActions from "../../redux/actions/task.actions";

//

//Open Edit Task Pop Up Screen
function openEditDesc() {
  document.getElementById("popUpEditForm").style.display = "block";
}

//Update the status of selected task 
function toggleStatus(task, dispatch) {
  dispatch(
    taskActions.updateTaskById(
      {
        ...task,
        status:
          task.status === "completed"
            ? (task.status = "in progress")
            : (task.status = "completed"),
      },
      task._id
    )
  );
}

//Define how each Task in the List is displayed as well as the functionalities
export default function TaskDetail({ task }) {
  const dispatch = useDispatch();
  const [isShownDelete, setIsShownDelete] = useState(false);

  return (
    <>
      {/* Delete button that appears on hover of the each task in the list */}
      <div
        className="grid grid-cols-5 gap-3"
        onMouseEnter={() => {
          setIsShownDelete(true);
        }}
        onMouseLeave={() => {
          setIsShownDelete(false);
        }}
      >
        {/* Display for togglable task status button */}
        {/* User will be able to change the status of task on click */}
        <div className="py-2 justify-self-start pl-5 flex col-span-2 w-80 items-center">
          <input
            type="image"
            onClick={() => toggleStatus(task, dispatch)}
            src={task.status === "completed" ? FinishIcon : ProgressIcon}
            alt="progress icon"
          />

          {/* Display a clickable task title */}
          {/* User will be able to open an edit pop up on click of the task title */}
          <button
            className="pl-2 capitalize"
            style={{
              textDecoration:
                task.status === "completed" ? "line-through" : "none",
              opacity: task.status === "completed" ? 0.3 : 1,
            }}
            onClick={() => {
              dispatch(taskActions.getTaskById(task._id));
              openEditDesc();
            }}
          >
            {task.title}
          </button>
        </div>

        {/* Display due date of the task */}
        <div className="py-2 flex justify-center">
          <div
            className="border w-24 h-10 text-center py-2"
            style={{
              textDecoration:
                task.status === "completed" ? "line-through" : "none",
              opacity: task.status === "completed" ? 0.3 : 1,
            }}
          >
            <Moment format="MMM DD">{task.dueDate}</Moment>
          </div>
        </div>
        
        {/* Display delete button on state change */}
        {/* User will be able to delete task on click of the button */}
        {isShownDelete ? (
          <div className="py-2 justify-self-end col-span-2 flex">
            {/* Display the status of the task */}
            {/* Will be updated accordingly */}
            <div className="pr-4">
              {task.status === "completed"
                ? StatusButton("complete", "Done")
                : StatusButton("inprogress", "In Progress")}
            </div>
            <div className="pr-5">
              <RemoveCircleIcon
                onClick={() => {
                  dispatch(taskActions.deleteTask(task._id));
                }}
              />
            </div>
          </div>
        ) : (
          <div className="py-2 justify-self-end pr-14 col-span-2">
            {task.status === "completed"
              ? StatusButton("complete", "Done")
              : StatusButton("inprogress", "In Progress")}
          </div>
        )}
      </div>
      <div className="mx-11 border-t-2"></div>
    </>
  );
}
