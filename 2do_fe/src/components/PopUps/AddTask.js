import React from "react";
import AddTaskPopUp, { openTaskDesc } from "./AddTaskPopUp";
import AddTaskIcon from "./AddTaskIcon.svg";

function AddTask() {
  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        <div className="py-3 mb-2 justify-self-start pl-5 flex col-span-2 w-80 items-center ">
          <img
            src={AddTaskIcon}
            alt="Add task icon"
            onClick={openTaskDesc}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="addTaskPopUp">
        <AddTaskPopUp />
      </div>
    </>
  );
}

export default AddTask;
