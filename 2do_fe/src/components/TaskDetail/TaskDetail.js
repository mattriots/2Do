import React from "react";
//import { useDispatch } from "react-redux";
import ProgressIcon from "./ProgressIcon.svg";
import FinishIcon from "./FinishIcon.svg";
import StageButton from "../Done/StageButton.js";
import { openEditDesc } from "../EditTask/EditTaskPopUp";
import Moment from "react-moment";

/* eslint-disable */
export default function TaskDetail({ task }) {
  //const dispatch = useDispatch();

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        <div className="py-2 justify-self-start pl-5 flex col-span-2 w-80 items-center">
          <input
            type="image"
            src={task.status === "completed" ? FinishIcon : ProgressIcon}
            alt="progress icon"
          />
          <div
            className="pl-2 capitalize"
            id="popUpEditForm"
            onClick={() => openEditDesc()}
          >
            {task.title}
          </div>
        </div>
        <div className="py-2 flex justify-center">
          <div className="border w-24 h-10 text-center py-2">
            <Moment format="MMM DD">{task.dueDate}</Moment>
          </div>
        </div>
        <div className="py-2 justify-self-end pr-14 col-span-2">
          {task.status === "completed"
            ? StageButton("complete", "Done")
            : StageButton("inprogress", "In Progress")}
        </div>
      </div>
      <div className="mx-11 border-t-2"></div>
    </>
  );
}
