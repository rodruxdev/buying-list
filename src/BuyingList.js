import React from "react";

function BuyingList(props){
  return(
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { BuyingList };