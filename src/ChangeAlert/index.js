import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
  if(show){
    return (
      <div>
        <p>Hubo cambios en los items</p>
        <button
          onClick={() => toggleShow()}
        >
          volver a cargar la información
        </button>
      </div>
    )
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener }