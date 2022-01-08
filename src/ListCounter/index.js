import React from "react";
import './ListCounter.css';

function ListCounter({totalItems, buyedItems, loading}) {
  return (
    <>
      <h1>Lista de Compras</h1>
      <h2 className={`${!!loading && "ListCounter--loading"}`}>Has comprado {buyedItems} de {totalItems} items de tu lista</h2>
    </>
  );

}

export { ListCounter };