import React from "react";
import { ItemContext } from "../ItemContext";
import "./ListSearch.css";
import searchSVG from "./search.svg"

function ListSearch() {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  const {searchValue, setSearchValue} = React.useContext(ItemContext);

  return (
    <div className="ListSearch">
      <div className="input-container">
        <input type= "text" id = "input-search"
        placeholder = "Buscar"
        value={searchValue}
        onChange={onSearchValueChange}
        />
        <label htmlFor="input-search">
          <img src={searchSVG} alt="search"/>
        </label>
      </div>
    </div>
  );

}

export { ListSearch };