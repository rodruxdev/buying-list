import React from "react";
import { ListIcon } from "."

// Componente de icono de cruz con cambio de color si se abre o cierra el modal
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