import React from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props){
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'ITEMS_V1') {
        console.log('Hubo cambios en Items_V1')
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    }

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
      />
      )
  }
}

export { withStorageListener }