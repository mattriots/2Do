import * as React from "react";
import ArrowDown from "./ArrowDown.svg";

export default function Date() {
  return (
    <>
      <div className="flex pl-5 border-t-2 pt-3">
        <img src={ArrowDown} alt="Arrow Down" />
        <div className="text-xl pl-5">Oct, 24</div>
      </div>
    </>
  );
}
