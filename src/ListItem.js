import React from "react";
import "./ListItem.css";
import cart from "./cart-check.svg";
import trash from "./trash.svg";


function ListItem({
  text,
  quantity,
  measure,
  buyed
}) {
  return (
    <li className="list-item">
      <img src={cart} alt={`${quantity} ${measure} de ${text}`} className={`list-item--car-icon ${buyed && 'list-item--car-icon__buyed'}`}/>
      <p className={`list-item--text ${buyed && 'list-item--text__buyed'}`}>
        {`${quantity} ${measure} de ${text}`}
      </p>
      <img src={trash} alt="Eliminar item" className="list-item--trash-icon"/>
    </li>
  );
}

export { ListItem }