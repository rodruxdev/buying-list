import React from "react";
import { ItemContext } from "../ItemContext";

function ItemForm(){
  const [newItemValue, setNewItemValue] = React.useState('')
  const {
    addItem,
    setOpenModal,
  } = React.useContext(ItemContext);

  const onChange = (event) => {
    setNewItemValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addItem(newItemValue);
    setOpenModal(false);
  }
  return(
    <form onSubmit={onSubmit}>
      <label>Cantidad</label>
      <textarea 
        value = {newItemValue}
        onChange={onChange}
        placeholder="Cebolla"/>
      <div>
        <button type="submit">
          Añadir a la Lista
        </button>
      </div>
    </form>
  );
}

export { ItemForm };