import React from "react";
import { ListIcon } from ".";

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