import React from "react";
import { ListIcon } from ".";

// Icono de carrito con cambio de color si el item esta tachado o no.
function CartIcon ({ buyed, onToggleBuyed }){
  return (
    <ListIcon
      type="cart"
      color={ buyed ? '#198E79' : 'black'}
      onClick={onToggleBuyed}
    />
  )
}

export { CartIcon };