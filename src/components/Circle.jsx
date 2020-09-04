import React, { useContext } from "react";
import { PositionContex } from "../contexts/AppStates";

function Circle() {
  const {
    circlePosition,
    circleTop,
    circleRight,
    circleBottom,
    circleLeft,
    valueUnit,
  } = useContext(PositionContex);

  return (
    <div
      className="circle"
      style={{
        position: circlePosition,
        top: `${circleTop}${valueUnit}`,
        right: `${circleRight}${valueUnit}`,
        bottom: `${circleBottom}${valueUnit}`,
        left: `${circleLeft}${valueUnit}`,
      }}
    ></div>
  );
}

export default Circle;
