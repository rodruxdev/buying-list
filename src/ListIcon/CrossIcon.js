import React from "react";
import { ListIcon } from "."

function CrossIcon({ openModal }) {
  return (
    <ListIcon
      type="cross"
      color={openModal ? 'black' : 'white'}
      active={openModal}
    />
  )
}

export { CrossIcon }