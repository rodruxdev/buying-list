import React from "react";
import "./ListSearch.css";
import searchSVG from "./search.svg"

function ListSearch() {
  return (
    <div className="ListSearch">
      <div className="input-container">
        <input type= "text" id = "input-search" placeholder = "Buscar" />
        <label htmlFor="input-search">
          <img src={searchSVG} alt="search"/>
        </label>
      </div>
    </div>
  );

}

export { ListSearch };