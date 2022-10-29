import React, { useState } from "react";

import ProgressIcon from "./ProgressIcon.svg";
import FinishIcon from "./FinishIcon.svg";

export default function TaskDetail() {
  const [state, setState] = useState(false);

  return (
    <>
      <div class="grid grid-cols-5 gap-3">
        <div className="py-2 justify-self-start pl-5 flex col-span-2 w-80 items-center">
          <img
            src={state ? FinishIcon : ProgressIcon}
            alt="progress icon"
            onClick={() => setState(!state)}
          />
          <div className="pl-2 capitalize">Make a design todo list</div>
        </div>
        <div className="py-2 flex justify-center">
          <div className="border w-24 h-10 text-center py-2">1 Nov</div>
        </div>
        <div className="py-2 justify-self-end pr-14 col-span-2">Stage</div>
      </div>
      <div className="px-3 border-t-2"></div>
    </>
  );
}
