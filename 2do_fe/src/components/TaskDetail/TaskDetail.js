import React, { useState } from "react";
import ProgressIcon from "./ProgressIcon.svg";
import FinishIcon from "./FinishIcon.svg";
import StageButton from "../Done/StageButton.js";
import { openEditDesc } from "../PopUps/EditTaskPopUp";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import taskActions from "../../redux/actions/task.actions";

export default function TaskDetail(props) {

  const dispatch = useDispatch();
  const [isShownDelete, setIsShownDelete] = useState(false);

  return (
    <>
      <div
        className="grid grid-cols-5 gap-3"
        onMouseEnter={() => {
          setIsShownDelete(true);
          console.log("true mouse enter");
        }}
        onMouseLeave={() => {
          setIsShownDelete(false);
          console.log("true mouse leave");
        }}
      >
        <div className="py-2 justify-self-start pl-5 flex col-span-2 w-80 items-center">
          <input
            type="image"
            src={props.task.status === "completed" ? FinishIcon : ProgressIcon}
            alt="progress icon"
          />
          <button
            className="pl-2 capitalize"
            onClick = {() => {
              // dispatch(taskActions.getTaskById(props.task._id));
              openEditDesc(props.task, dispatch);
              }}
          >
            {props.task.title}
          </button>
        </div>
        <div className="py-2 flex justify-center">
          <div className="border w-24 h-10 text-center py-2">
            <Moment format="MMM DD">{props.task.dueDate}</Moment>
          </div>
        </div>
        {isShownDelete ? (
          <div className="py-2 justify-self-end col-span-2 flex">
            <div className="pr-4">
              {props.task.status === "completed"
                ? StageButton("complete", "Done")
                : StageButton("inprogress", "In Progress")}
            </div>
            <div className="pr-5">
              <RemoveCircleIcon
                onClick={() => {dispatch(taskActions.deleteTask(props.task._id));
                 }}
              />
            </div>
          </div>
        ) : (
          <div className="py-2 justify-self-end pr-14 col-span-2">
            {props.task.status === "completed"
              ? StageButton("complete", "Done")
              : StageButton("inprogress", "In Progress")}
          </div>
        )}
      </div>
      <div className="mx-11 border-t-2"></div>
      
      </>
  );
}
