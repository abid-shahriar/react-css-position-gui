import React, { useState } from "react";
import Visual from "./components/Visual";
import Controls from "./components/Controls";

export const PositionContex = React.createContext();

function App() {
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
  };

  return (
    <PositionContex.Provider value={PositionContexvalue}>
      <Controls />
      <Visual />
    </PositionContex.Provider>
  );
}

export default App;
