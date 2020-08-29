import React, { useContext } from "react";
import { PositionContex } from "../App";

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
        <label htmlFor="top">Top:</label>
        <input type="number" onChange={handleTopPosition} placeholder="none" />
      </div>
      <div className="absolute-position__container">
        <label htmlFor="top">Right:</label>
        <input
          type="number"
          onChange={handleRightPosition}
          placeholder="none"
        />
      </div>
      <div className="absolute-position__container">
        <label htmlFor="top">Bottom:</label>
        <input
          type="number"
          onChange={handleBottomPosition}
          placeholder="none"
        />
      </div>
      <div className="absolute-position__container">
        <label htmlFor="top">Left:</label>
        <input type="number" onChange={handleLeftPosition} placeholder="none" />
      </div>
    </div>
  );
}

export default AbsolutePosition;
