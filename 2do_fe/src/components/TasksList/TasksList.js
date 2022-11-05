import React from "react";
import AddTask from "../AddTask/AddTask";
import TaskDetail from "../TaskDetail/TaskDetail";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "../../logo_2do.png";

function TasksList() {
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
                Stage
              </div>
            </div>
            <TaskDetail />
            <TaskDetail />
            <TaskDetail />
            <TaskDetail />
            <TaskDetail />
            <AddTask />
          </Box>
        </div>
      </div>
    </Container>
  );
}

export default TasksList;
