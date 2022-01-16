import React from "react";
import { ListIcon } from "../ListIcon";
import "./ListSearch.css";

function ListSearch({searchValue, setSearchValue, loading}) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  // Se utilizan dos divs para crear el borde con gradiente.
  return (
    <div className="ListSearch">
      <div className="input-container">
        <input type= "text" id = "input-search"
        placeholder = "Buscar"
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
        />
        <label htmlFor="input-search">
          <ListIcon type="search" color={'red'}/>
        </label>
      </div>
    </div>
  );

}

export { ListSearch };