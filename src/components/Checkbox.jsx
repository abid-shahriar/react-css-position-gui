import React, { useContext } from "react";
import { PositionContex } from "../contexts/AppStates";

function Checkbox({ visualObject }) {
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

  function handleCheckbox(e) {
    const valueInputField = e.target.nextElementSibling.nextElementSibling;

    const attributeValue = valueInputField.getAttribute("name");

    const boxElement = document.querySelector(".box");
    const circleElement = document.querySelector(".circle");

    if (e.target.checked) {
      valueInputField.removeAttribute("disabled");
    } else {
      valueInputField.value = "";
      valueInputField.setAttribute("disabled", "");

      if (visualObject === "box") {
        switch (attributeValue) {
          case "top":
            setBoxTop(null);
            boxElement.style.removeProperty("top");
            break;
          case "right":
            setBoxRight(null);
            boxElement.style.removeProperty("right");
            break;
          case "bottom":
            setBoxBottom(null);
            boxElement.style.removeProperty("bottom");
            break;
          case "left":
            setBoxLeft(null);
            boxElement.style.removeProperty("left");
            break;
          default:
            return;
        }
      } else if (visualObject === "circle") {
        switch (attributeValue) {
          case "top":
            setCircleTop(null);
            circleElement.style.removeProperty("top");
            break;
          case "right":
            setCircleRight(null);
            circleElement.style.removeProperty("right");
            break;
          case "bottom":
            setCircleBottom(null);
            circleElement.style.removeProperty("bottom");
            break;
          case "left":
            setCircleLeft(null);
            circleElement.style.removeProperty("left");
            break;
          default:
            return;
        }
      }
    }
  }
  return (
    <>
      <input type="checkbox" onChange={handleCheckbox} />
    </>
  );
}

export default Checkbox;
