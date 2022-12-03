import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTask from "../PopUps/AddTask";
import TaskDetail from "../TaskDetail/TaskDetail";
import logo from "../../logo_2do.png";
import taskActions from "../../redux/actions/task.actions";
import ViewTaskBy from "../ViewTaskBy/ViewTaskBy";
import Edit from "../PopUps/EditTaskPopUp";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

//Display a list of all the tasks added by the user

function TasksList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const loading = useSelector((state) => state.loading);
  const [sortedTasks, setSortedTasks] = useState([]);
  const [toggleSort, setToggleSort] = useState(false);

  useEffect(() => {
    dispatch(taskActions.getAllTasks());
  }, [dispatch]);

  useEffect(() => {
    setSortedTasks(tasks);
  }, [tasks]);

  const onHeaderClick = (type) => {
    const value = toggleSort ? 1 : -1;
    const sorted = [...tasks].sort((a, b) =>
      a[type].toLowerCase() > b[type].toLowerCase()
        ? value
        : b[type].toLowerCase() > a[type].toLowerCase()
        ? -value
        : 0
    );
    setSortedTasks(sorted);
  };

  return (
    <Container maxWidth={false} style={{ marginTop: "50px" }}>
      <div id="content">
        <div className="shadow" style={{ textAlign: "center" }}>
          <Box sx={{ flexGrow: 1 }}>
            <div className="grid grid-cols-5 gap-2 header-text border-b-2">
              {/* Header Label for the Task Title */}
              {/* Sort title of tasks aphabetically on click of the Label */}
              <div
                className="text-3xl py-5 justify-self-start pl-14 col-span-2 cursor-pointer"
                onClick={() => {
                  setToggleSort(!toggleSort);
                  onHeaderClick("title");
                }}
              >
                Task
                <img src={logo} className="App-logo" />
              </div>
              
              {/* Header Label for Due Dates */}
              {/* Sort date of tasks in ascending or descending order on click of the Label */}
              <div
                className="text-3xl py-5 cursor-pointer"
                onClick={() => {
                  setToggleSort(!toggleSort);
                  onHeaderClick("dueDate");
                }}
              >
                Due Date
              </div>

              {/* Header Label for Status */}
              <div className="text-3xl py-5 justify-self-end pr-14 col-span-2">
                Status
              </div>
            </div>

            {/* Filter/View tasks by status */}
            <ViewTaskBy />
            {loading ? (
              <div>loading</div>
            ) : (
              //Display all Task items
              <div className="overflow-scroll h-[33rem]">
                {sortedTasks.map((task, index) => (
                  <TaskDetail key={index} task={task} />
                ))}
              </div>
            )}

            {/* Define Add task and Edit task pop up */}
            <AddTask />
            <Edit />
          </Box>
        </div>
      </div>
    </Container>
  );
}

export default TasksList;
