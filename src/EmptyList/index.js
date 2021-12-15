import React from "react";
import "./EmptyList.css"
import empty from "./empty.png"

function EmptyList() {
  return (
    <div className="EmptyList">
      <img className="EmptyList--image" src={empty} alt="Crea tu primer item en la lista de compra"/>
      <p className="EmptyList--message">Crea tu primer item en la lista de compra</p>
    </div>
  )
}

export { EmptyList }