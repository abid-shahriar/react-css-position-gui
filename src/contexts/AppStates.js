import React, { createContext, useState } from "react";

export const PositionContex = createContext();

const AppStates = (props) => {
  const [boxPosition, setBoxPosition] = useState("");
  const [circlePosition, setCirclePosition] = useState("");
  const [circleTop, setCircleTop] = useState(null);
  const [circleRight, setCircleRight] = useState(null);
  const [circleBottom, setCircleBottom] = useState(null);
  const [circleLeft, setCircleLeft] = useState(null);
  const [boxTop, setBoxTop] = useState(null);
  const [boxRight, setBoxRight] = useState(null);
  const [boxBottom, setBoxBottom] = useState(null);
  const [boxLeft, setBoxLeft] = useState(null);
  const [valueUnit, setValueUnit] = useState("%");

  const PositionContexvalue = {
    boxPosition,
    setBoxPosition,
    circlePosition,
    setCirclePosition,
    circleTop,
    circleRight,
    circleBottom,
    circleLeft,
    setCircleTop,
    setCircleRight,
    setCircleBottom,
    setCircleLeft,
    boxTop,
    boxRight,
    boxBottom,
    boxLeft,
    setBoxTop,
    setBoxRight,
    setBoxBottom,
    setBoxLeft,
    valueUnit,
    setValueUnit,
  };

  return (
    <PositionContex.Provider value={PositionContexvalue}>
      {props.children}
    </PositionContex.Provider>
  );
};

export default AppStates;
