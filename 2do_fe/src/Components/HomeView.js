import * as React from "react";
import logo from "../logo_2do.png";
import styled from "@emotion/styled";
import Datesvg from "./DatePlaceholder";
import "./HomeView.css";

const Button = styled.button`
  /* Ellipse 4 */
  width: 102px;
  height: 30px;
  left: 877px;
  top: 183px;

  background: #63de86;
  width: 102px;
  height: 30px;
  left: 908px;
  top: 189px;

  border-radius: 25px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: white;
`;

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
      <div className="third-container">
        <div>Task Placeholder</div>
        <div>Date placeholder</div>
        <Button>Done</Button>
      </div>
    </div>
  );
}
export default HomeView;
