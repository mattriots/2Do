import * as React from "react";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import "../../AddTask.css";

export const DueDate = () => {
    const [dueDate, setDueDate] = React.useState(null);

    const handleChange = (newDate)=>{
      setDueDate(newDate);
    };

    return(
      <div>
      <label htmlFor="date">Due Date</label>
      <LocalizationProvider dateAdapter = {AdapterDayjs}>
        <DesktopDatePicker
          inputFormat = "MM/DD/YYYY"
          value={dueDate}
          onChange = {handleChange}
          renderInput = {(params) => 
            <TextField{...params} 
              className="textfieldstyle"
              id = "duedate"
            />}
        />
      </LocalizationProvider>
      </div>
      
    );
}

{/* <input
        type="text"
        className="input-date"
        placeholder="Click here to choose date"
        // name = "date"
        // id = "date" />
      /> */}