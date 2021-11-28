import React from "react";

function ListItem({
  text,
  quantity,
  measure
}) {
  return (
    <li>
      {quantity} {measure} {text}
    </li>
  );
}

export { ListItem }