import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Date from "./components/Date/Date";
import TaskDetail from "./components/TaskDetail/TaskDetail";
import AddTask from "./AddTask.js";
import { openTaskDesc } from "./AddTask.js";
import "./App.css";
import logo from "./logo_2do.png";
import "./Header.css";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <React.Fragment>
        <Container maxWidth={false} style={{ marginTop: "50px" }}>
          <div id="content">
            <div style={{ textAlign: "center", border: "1px solid" }}>
              <Box sx={{ flexGrow: 1 }}>
                <div className="grid grid-cols-5 gap-2 header-text">
                  <div className="text-3xl py-5 justify-self-start pl-14 col-span-2">
                    Task
                    <img src={logo} className="App-logo" />
                  </div>
                  <div className="text-3xl py-5 ">Due Date</div>
                  <div className="text-3xl py-5 justify-self-end pr-14 col-span-2">
                    Stage
                  </div>
                </div>

                <Date />
                <TaskDetail />
                <TaskDetail />
                <TaskDetail />
                <TaskDetail />
                <TaskDetail />
              </Box>
            </div>
          </div>
        </Container>
        <button className="openButton" onClick={openTaskDesc}>
          + 
        </button>
        <div className="addTaskPopUp">
          <AddTask />
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
