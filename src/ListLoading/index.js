import React from "react";
import "./ListLoading.css";

function ListLoading(){
  return(
    <div className="ListLoading">
      <div className="ListLoading--balls">
        <div className="ball" id="ball-1"></div>
        <div className="ball" id="ball-2"></div>
        <div className="ball" id="ball-3"></div>
      </div>
      <p className="ListLoading--message">Tu lista de compras esta cargando...</p>
    </div>
  )
}

export { ListLoading };