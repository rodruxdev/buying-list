import React from "react";

function ListHeader({ children, loading }) {
  // Este componente envía a los compontes hijos el props "loading"
  return (
    <header>
    {React.Children
      .toArray(children)
      .map((child) => React.cloneElement(child, { loading }))}
    </header>
  );
}

export { ListHeader };