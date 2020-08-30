import React, { useContext } from "react";
import { PositionContex } from "../App";

function Unit() {
  const { valueUnit } = useContext(PositionContex);
  return <span className="unit">{valueUnit}</span>;
}

export default Unit;
