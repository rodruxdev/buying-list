import React from "react";
import './ListCounter.css';

function ListCounter({totalItems, buyedItems}) {
  return (
    <>
      <h1>Lista de Compras</h1>
      <h2>Has comprado {buyedItems} de {totalItems} items de tu lista</h2>
    </>
  );

}

export { ListCounter };