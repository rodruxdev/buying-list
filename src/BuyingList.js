import React from "react";
import "./BuyingList.css"

function BuyingList(props){
  return(
    <section>
      <ul className="buyingList">
        {props.children}
      </ul>
    </section>
  );
}

export { BuyingList };