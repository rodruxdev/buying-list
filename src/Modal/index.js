// import React from "react";
import ReactDOM from 'react-dom';
import "./Modal.css"

// Componente con portal para enviar datos del formulario.
function Modal({ children }){
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal }