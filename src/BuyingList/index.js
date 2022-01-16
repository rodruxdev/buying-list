import React from "react";
import "./BuyingList.css"

function BuyingList(props){
  // Obtiene la funcion de render de children o de props.
  const renderFunc = props.children || props.render;

  // Renderiza la carga, error, busqueda o los items de acuerdo
  //  a las condicionales usando los function props.
  return(
    <section className="buyingList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalItems) && props.onEmpty()}
      {(!!props.totalItems && !props.searchedItems.length) && props.onEmptySearch(props.searchText)}

      <ul className="buyingList">
      {(!props.loading && !props.error) && props.searchedItems.map(renderFunc)}
      </ul>
    </section>
  );
}

export { BuyingList };