import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Date from "./components/Date/Date";
import TaskDetail from "./components/TaskDetail/TaskDetail";

function App() {
  return (
    <div>
      <NavBar />
      <React.Fragment>
        <Container maxWidth={false} style={{ marginTop: "50px" }}>
          <div id="content">
            <div style={{ textAlign: "center", border: "1px solid" }}>
              <Box sx={{ flexGrow: 1 }}>
                <div class="grid grid-cols-5 gap-2">
                  <div className="text-3xl py-5 justify-self-start pl-14 col-span-2">
                    Task
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
      </React.Fragment>
    </div>
  );
}

export default App;
