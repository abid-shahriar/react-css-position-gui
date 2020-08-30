import React, { useContext } from "react";
import { PositionContex } from "../App";
import Circle from "./Circle";

function Visual() {
  const {
    boxPosition,
    boxTop,
    boxRight,
    boxBottom,
    boxLeft,
    valueUnit,
  } = useContext(PositionContex);

  return (
    <div className="visual-wrapper">
      <div className="box-container">
        <div
          className="box"
          style={{
            position: boxPosition,
            top: `${boxTop}${valueUnit}`,
            right: `${boxRight}${valueUnit}`,
            bottom: `${boxBottom}${valueUnit}`,
            left: `${boxLeft}${valueUnit}`,
          }}
        >
          <Circle />
        </div>
      </div>
    </div>
  );
}

export default Visual;
