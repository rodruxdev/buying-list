import React from "react";

function useStorageListener(sincronize) {
  const [storageChange, setStorageChange] = React.useState(false);

  // Agrega el escuchador al local storage y muestra la notificacion si ocurre un cambio.
  window.addEventListener('storage', (change) => {
    if (change.key === 'ITEMS_V1') {
      setStorageChange(true);
    }
  });

  // Funcion para iniciar la sincronizacion y ocultar la notificacion.
  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  }

  return ({
      show: storageChange,
      toggleShow,
  })

}

export { useStorageListener }