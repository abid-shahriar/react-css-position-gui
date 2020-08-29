import React, { useContext } from "react";
import { PositionContex } from "../App";

function Visual() {
  const {
    boxPosition,
    circlePosition,
    circleTop,
    circleRight,
    circleBottom,
    circleLeft,
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
        </div>
      </div>
    </div>
  );
}

export default Visual;
