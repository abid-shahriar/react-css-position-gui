import React from "react";

function PositionInput({ name, type, handlePositionChange, placeholder }) {
  return (
    <>
      <input
        name={name}
        type={type}
        onChange={handlePositionChange}
        placeholder={placeholder}
        disabled
      />
    </>
  );
}

export default PositionInput;
