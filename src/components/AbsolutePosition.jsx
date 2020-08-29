import React, { useContext } from "react";
import { PositionContex } from "../App";
import PositionInput from "./PositionInput";
import Checkbox from "./Checkbox";

function AbsolutePosition({ visualObject }) {
  const {
    setCircleTop,
    setCircleRight,
    setCircleBottom,
    setCircleLeft,
    setBoxTop,
    setBoxRight,
    setBoxBottom,
    setBoxLeft,
  } = useContext(PositionContex);

  const handleTopPosition = (e) => {
    if (visualObject === "box") {
      setBoxTop(e.target.value);
    } else if (visualObject === "circle") {
      setCircleTop(e.target.value);
    }
  };

  const handleRightPosition = (e) => {
    if (visualObject === "box") {
      setBoxRight(e.target.value);
    } else if (visualObject === "circle") {
      setCircleRight(e.target.value);
    }
  };

  const handleBottomPosition = (e) => {
    if (visualObject === "box") {
      setBoxBottom(e.target.value);
    } else if (visualObject === "circle") {
      setCircleBottom(e.target.value);
    }
  };

  const handleLeftPosition = (e) => {
    if (visualObject === "box") {
      setBoxLeft(e.target.value);
    } else if (visualObject === "circle") {
      setCircleLeft(e.target.value);
    }
  };

  return (
    <div className="absolute-position">
      <div className="absolute-position__container">
        <Checkbox visualObject={visualObject} />
        <label htmlFor="top">Top:</label>
        <PositionInput
          name="top"
          type="number"
          handlePositionChange={handleTopPosition}
          placeholder="none"
        />
      </div>
      <div className="absolute-position__container">
        <Checkbox visualObject={visualObject} />
        <label htmlFor="right">Right:</label>
        <PositionInput
          name="right"
          type="number"
          handlePositionChange={handleRightPosition}
          placeholder="none"
        />
      </div>
      <div className="absolute-position__container">
        <Checkbox visualObject={visualObject} />
        <label htmlFor="bottom">Bottom:</label>
        <PositionInput
          name="bottom"
          type="number"
          handlePositionChange={handleBottomPosition}
          placeholder="none"
        />
      </div>
      <div className="absolute-position__container">
        <Checkbox visualObject={visualObject} />
        <label htmlFor="left">Left:</label>
        <PositionInput
          name="left"
          type="number"
          handlePositionChange={handleLeftPosition}
          placeholder="none"
        />
      </div>
    </div>
  );
}

export default AbsolutePosition;
