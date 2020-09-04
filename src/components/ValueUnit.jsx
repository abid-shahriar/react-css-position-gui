import React, { useContext } from "react";
import { PositionContex } from "../contexts/AppStates";

function ValueUnit() {
  const { setValueUnit } = useContext(PositionContex);

  const handleValueUnitChange = (e) => {
    setValueUnit(e.target.value);
  };
  return (
    <div className="value-unit">
      <label htmlFor="value-unit">Value-Unit:</label>
      <select name="value-unit" onChange={handleValueUnitChange}>
        <option value="%">Percentage (%)</option>
        <option value="px">Pixel (px)</option>
        <option value="rem">Rem</option>
        <option value="em">EM</option>
      </select>
    </div>
  );
}

export default ValueUnit;
