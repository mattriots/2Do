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
  // var colorstring = `rgb(${r},${g},${b})`;

  return (
    <React.Fragment>
      <ToastContainer />
      <style>{`body { background-color: rgb(${r},${g},${b})}; }`}</style>
      <Tooltip title="Change backgrund color" placement="right">
        <ColorLensTwoToneIcon
          className="colorpicker"
          onClick={() => {
            setPalletOpen(true);
          }}
        />
      </Tooltip>

      <div
        style={{ backgroundColor: `rgba(${r},${g},${b},${a})` }}
        onClick={() => {
          setPalletOpen(false);
        }}
      >
        <TasksList />
      </div>

      {isPalletOpen ? (
        <div className="pickerblock">
          {/* Sketch Picker from react-color and handling color on onChange event */}
          <SketchPicker
            onChange={(color) => {
              setSketchPickerColor(color.rgb);
            }}
            color={sketchPickerColor}
          />
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
