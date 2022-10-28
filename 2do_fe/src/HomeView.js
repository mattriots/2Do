import * as React from "react";
import logo from "./logo_2do.png";
import styled from "@emotion/styled";
import Date from "./Components/DateStuff/Date";
import Datesvg from "./Components/DateStuff/DatePlaceholder";
import "./HomeView.css";

const Status = styled.div`
  background: ${(props) => (props.complete ? "#63de86" : "#df554c")};
  width: 102px;
  height: 30px;

  border-radius: 25px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: white;
`;

function TaskRow() {
  return (
    <div className="third-container">
      <button className="edit-task-button">Make a design todo list</button>
      <Date />
      <Status complete>
        <div>Done</div>
      </Status>
    </div>
  );
}

function DateDropDown() {
  return (
    <div>
      <Datesvg />
    </div>
  );
}

function TextWithLogo() {
  return <img src={logo} className="App-logo" />;
}

function HomeView() {
  return (
    <div>
      <div className="first-container">
        <div className="header-text">
          Tasks <TextWithLogo />
        </div>
        <div className="header-text">Due Date</div>
        <div className="header-text">Stage</div>
      </div>
      <hr></hr>
      <div className="second-container">
        <DateDropDown />
      </div>
      <TaskRow />
    </div>
  );
}
export default HomeView;
