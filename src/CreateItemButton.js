import React from "react";
import "./CreateItemButton.css";
import crossSVG from "./cross.svg"

function CreateItemButton() {
  return (
    <button className="button" type = "button">
      <img src={crossSVG} alt="Add new item" className="button--image"/>
    </button>
  );
}

export { CreateItemButton }