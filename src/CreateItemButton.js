import React from "react";
import "./CreateItemButton.css";
import crossSVG from "./cross.svg"

function CreateItemButton() {
  const onClickButton = (msg) => {
    alert(msg);
  }
  return (
    <button
      className="button"
      type = "button"
      onClick={() => onClickButton('Aqui debería ir el modal')}
      >
      <img src={crossSVG} alt="Add new item" className="button--image"/>
    </button>
  );
}

export { CreateItemButton }