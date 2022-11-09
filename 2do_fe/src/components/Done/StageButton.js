import React from "react";
import styled from "@emotion/styled";

const Status = styled.div`
  background: ${(props) =>
    props.variant === "complete" ? "#63de86" : "#df554c"};
  width: 102px;
  height: 30px;
  border-radius: 25px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  padding-top: 5px;
  color: white;
`;

function StageButton(complete, text) {
  return <Status variant={complete}>{text}</Status>;
}

export default StageButton;
