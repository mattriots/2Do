import * as React from "react";
import logo from "../../logo_2do.png";
import "../../Header.css";
import Box from "@mui/material/Box";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="first-container">
        <div className="header-text">
          Tasks <img src={logo} className="App-logo" />
        </div>
        <div className="header-text">Due Date</div>
        <div className="header-text">Stage</div>
      </div>
    </Box>
  );
}
