import React from "react";
import { ItemContext } from "../ItemContext";
import './ListCounter.css';

function ListCounter() {
  const {totalItems, buyedItems} = React.useContext(ItemContext);

  return (
    <>
      <h1>Lista de Compras</h1>
      <h2>Has comprado {buyedItems} de {totalItems} items de tu lista</h2>
    </>
  );

}

export { ListCounter };