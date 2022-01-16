import React from "react";
import { CartIcon } from "../ListIcon/CartIcon";
import { TrashIcon } from "../ListIcon/TrashIcon";
import "./ListItem.css";

// Componente para renderizar items.
function ListItem({
  text,
  quantity,
  measure,
  buyed,
  toggleBuyed,
  onDelete
}) {

  return (
    <li className="list-item">
      <CartIcon
        buyed={buyed}
        onToggleBuyed={toggleBuyed}
      />
      <p className={`list-item--text ${buyed && 'list-item--text__buyed'}`}>
        {`${quantity} ${measure} de ${text}`}
      </p>
      <TrashIcon
        onDelete={onDelete}
      />
    </li>
  );
}

export { ListItem }