import React, { useContext } from "react";
import ControlBox from "./ControlBox";
import { PositionContex } from "../App";

function Controls() {
  const { setBoxPosition, setCirclePosition } = useContext(PositionContex);
  return (
    <div className="controls-wrapper">
      <ControlBox visualObject="box" setPosition={setBoxPosition} />
      <ControlBox visualObject="circle" setPosition={setCirclePosition} />
    </div>
  );
}

export default Controls;
