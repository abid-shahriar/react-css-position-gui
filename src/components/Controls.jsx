import React, { useContext } from "react";
import ControlBox from "./ControlBox";
import { PositionContex } from "../contexts/AppStates";
import ValueUnit from "./ValueUnit";

function Controls() {
  const { setBoxPosition, setCirclePosition } = useContext(PositionContex);
  return (
    <div className="controls-wrapper">
      <ValueUnit />
      <ControlBox visualObject="box" setPosition={setBoxPosition} />
      <ControlBox visualObject="circle" setPosition={setCirclePosition} />
    </div>
  );
}

export default Controls;
