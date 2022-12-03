import React, { useState } from "react";
import TasksList from "./components/TasksList/TasksList";
import "./App.css";
import "./Header.css";
import Tooltip from "@mui/material/Tooltip";
import ColorLensTwoToneIcon from "@mui/icons-material/ColorLensTwoTone";
import { SketchPicker } from "react-color";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //creating state to store our color and also set color using onChange event for sketch picker
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: "255",
    g: "255",
    b: "255",
    a: "100",
  });
  // destructuring rgba from state
  const { r, g, b, a } = sketchPickerColor;
  const [isPalletOpen, setPalletOpen] = useState(false);

  return (
    <React.Fragment>
      <ToastContainer />

      {/* User will be able to change the background color of the page */}
      <style>{`body { background-color: rgb(${r},${g},${b})}; }`}</style>
      <Tooltip title="Change backgrund color" placement="right">
        {/* Clickable Color Pallet icon */}
        {/* Opens color picker pop up on click */}
        <ColorLensTwoToneIcon
          className="colorpicker"
          onClick={() => {
            setPalletOpen(true);
          }}
        />
      </Tooltip>
    
      {/* Display Task List component */}
        {/* Include Header Label, Drop down filter to filter tasks and List of all Task   */}
      <div
        style={{ backgroundColor: `rgba(${r},${g},${b},${a})` }}
        onClick={() => {
          setPalletOpen(false);
        }}
      >
        <TasksList />
      </div>

      {/* Open Color Picker*/}
      {/* User will be able to select a color and
      Set the background of the page to the selected color from the picker */}
      {isPalletOpen ? (
        <div className="pickerblock">
          {/* Sketch Picker from react-color and handling color on onChange event */}
          <SketchPicker
            onChange={(color) => {
              setSketchPickerColor(color.rgb);
            }}
            color={sketchPickerColor}
          />
          {/* Close the Color picker pop up */}
          <button
            className="set-color-button"
            onClick={() => {
              setPalletOpen(false);
            }}
          >
            Set Color
          </button>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default App;
