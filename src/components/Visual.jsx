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
  } = useContext(PositionContex);

  console.log(boxTop);

  return (
    <div className="visual-wrapper">
      <div className="box-container">
        <div
          className="box"
          style={{
            position: boxPosition,
            top: `${boxTop}px`,
            right: `${boxRight}px`,
            bottom: `${boxBottom}px`,
            left: `${boxLeft}px`,
          }}
        >
          <div
            className="circle"
            style={{
              position: circlePosition,
              top: `${circleTop}px`,
              right: `${circleRight}px`,
              bottom: `${circleBottom}px`,
              left: `${circleLeft}px`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Visual;
