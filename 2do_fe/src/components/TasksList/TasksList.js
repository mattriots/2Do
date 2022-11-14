import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTask from "../PopUps/AddTask";
import TaskDetail from "../TaskDetail/TaskDetail";
import logo from "../../logo_2do.png";
import taskActions from "../../redux/actions/task.actions";
import ViewTaskBy from "../ViewTaskBy/ViewTaskBy";
import Edit from "../PopUps/EditTaskPopUp";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function TasksList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(taskActions.getAllTasks());
  }, [dispatch]);

  return (
    <Container maxWidth={false} style={{ marginTop: "50px" }}>
      <div id="content">
        <div className="shadow" style={{ textAlign: "center" }}>
          <Box sx={{ flexGrow: 1 }}>
            <div className="grid grid-cols-5 gap-2 header-text border-b-2">
              <div className="text-3xl py-5 justify-self-start pl-14 col-span-2">
                Task
                <img src={logo} className="App-logo" />
              </div>
              <div className="text-3xl py-5 ">Due Date</div>
              <div className="text-3xl py-5 justify-self-end pr-14 col-span-2">
                Status
              </div>
            </div>
            <ViewTaskBy />
            {loading ? (
              <div>loading</div>
            ) : (
              <div className="overflow-scroll h-[33rem]">
                {tasks.map((task, index) => (
                  <TaskDetail key={index} task={task} />
                ))}
              </div>
            )}
            <AddTask />
            {true && (
              <div className="editTaskPopUp">
                <Edit />
              </div>
            )}
          </Box>
        </div>
      </div>
    </Container>
  );
}

export default TasksList;
