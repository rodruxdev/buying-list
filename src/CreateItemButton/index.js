import React from "react";
import { ItemContext } from "../ItemContext";
import "./CreateItemButton.css";
import { CrossIcon } from "../ListIcon/CrossIcon";

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
      <CrossIcon openModal={openModal}/>
    </button>
  );
}

export { CreateItemButton }