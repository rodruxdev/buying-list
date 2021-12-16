import React from "react";
import { ListIcon } from ".";

function TrashIcon({ onDelete }) {
  return (
    <ListIcon
      type="trash"
      onClick={onDelete}
    />
  )
}

export { TrashIcon }