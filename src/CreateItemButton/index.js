import React from "react";
import { ItemContext } from "../ItemContext";
import "./CreateItemButton.css";
import crossSVG from "./cross.svg"

function CreateItemButton() {
  const { openModal, setOpenModal } = React.useContext(ItemContext);
  const onClickButton = () => {
    setOpenModal(!openModal);
  }
  return (
    <button
      className={`button ${!!openModal && "button__active"}`}
      type = "button"
      onClick={onClickButton}
      >
      <img src={crossSVG} alt="Add new item" className="button--image"/>
    </button>
  );
}

export { CreateItemButton }