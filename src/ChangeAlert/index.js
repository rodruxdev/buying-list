import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if(show){
    return (
      <div className="bkg-notification">
        <div className="notification--container">
          <p className="notification--message">Hubo cambios en los items en otra pestaña.</p>
          <button
            onClick={() => toggleShow()}
            className="notification--button"
          >
            VOLVER A CARGAR
          </button>
        </div>
      </div>
    )
  } else {
    return null;
  }
}


export { ChangeAlert }