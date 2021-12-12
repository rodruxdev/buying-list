import React from "react";
import './ListCounter.css';

function ListCounter({total, buyed}) {
  return (
    <>
      <h1>Lista de Compras</h1>
      <h2>Has comprado {buyed} de {total} items de tu lista</h2>
    </>
  );

}

export { ListCounter };