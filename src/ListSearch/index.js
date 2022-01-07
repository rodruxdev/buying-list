import React from "react";
import { ListIcon } from "../ListIcon";
import "./ListSearch.css";

function ListSearch({searchValue, setSearchValue}) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="ListSearch">
      <div className="input-container">
        <input type= "text" id = "input-search"
        placeholder = "Buscar"
        value={searchValue}
        onChange={onSearchValueChange}
        />
        <label htmlFor="input-search">
          <ListIcon type="search" color={'red'}/>
        </label>
      </div>
    </div>
  );

}

export { ListSearch };