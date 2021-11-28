import React from "react";

function ListSearch() {
  return (
    <label>
    Puedes buscar items en tu lista: 
    <input type= "text" id = "input-search" placeholder = "Cebolla" />
    </label>
  );

}

export { ListSearch };