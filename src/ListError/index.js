import React from "react";
import "./ListError.css";
import errorImg from "./error.png"

function ListError() {
  return (
    <div className="ListError">
      <img src={errorImg} alt="Error" className="ListError--image"/>
      <p className="ListError--message">Hubo un error en la carga de su lista de compras</p>
    </div>
  );
}

export { ListError };