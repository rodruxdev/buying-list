import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
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


export { ChangeAlert }