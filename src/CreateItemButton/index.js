import React from "react";
import "./CreateItemButton.css";
import { CrossIcon } from "../ListIcon/CrossIcon";

function CreateItemButton({ openModal, setOpenModal }) {
  const onClickButton = () => {
    setOpenModal(!openModal);
  }
  return (
    <button
      className={`button ${!!openModal && "button__active"}`}
      type = "button"
      onClick={onClickButton}
      >
      <CrossIcon openModal={openModal}/>
    </button>
  );
}

export { CreateItemButton }