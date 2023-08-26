import React from "react";
import Receive from "./Receive";
import Calculate from "./Calculate";

const LeftContainer = () => {
  return (
    <div className="col-span-3 h-[635px]">
      <Receive />
      <Calculate />
    </div>
  );
};

export default LeftContainer;
