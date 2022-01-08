import React from "react";
import "./BuyingList.css"

function BuyingList(props){
  const renderFunc = props.children || props.render;
  return(
    <section className="buyingList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalItems) && props.onEmpty()}
      {(!!props.totalItems && !props.searchedItems.length) && props.onEmptySearch(props.searchText)}

      <ul className="buyingList">
      {props.searchedItems.map(renderFunc)}
      </ul>
    </section>
  );
}

export { BuyingList };