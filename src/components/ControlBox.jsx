import React from "react";
import AbsolutePosition from "./AbsolutePosition";

const postitons = ["static", "relative", "absolute"];

function ControlBox({ visualObject, setPosition }) {
  const positionChnageHandler = (e) => {
    setPosition(e.target.value);
  };

  return (
    <div className="control-box">
      <h3>{`${visualObject}-Position`}</h3>
      <div className="controls">
        <div className="select-position">
          <label htmlFor="position">Position:</label>
          <select name="position" onChange={positionChnageHandler}>
            {postitons.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>

        <AbsolutePosition visualObject={visualObject} />
      </div>
    </div>
  );
}

export default ControlBox;
