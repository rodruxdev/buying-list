import React from "react";
import "./CreateItemButton.css";
import crossSVG from "./cross.svg"

function CreateItemButton(props) {
  const onClickButton = () => {
    props.setOpenModal(true);
  }
  return (
    <button
      className="button"
      type = "button"
      onClick={onClickButton}
      >
      <img src={crossSVG} alt="Add new item" className="button--image"/>
    </button>
  );
}

export { CreateItemButton }