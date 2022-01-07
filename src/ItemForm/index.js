import React from "react";
import "./ItemForm.css"

function ItemForm({ addItem, setOpenModal }){
  const [newItemName, setNewItemName] = React.useState('')
  const [newItemQuantity, setNewItemQuantity] = React.useState('')
  const [newItemMeasure, setNewItemMeasure] = React.useState('kgs')

  const onChangeName = (event) => {
    setNewItemName(event.target.value);
  }

  const onChangeQuantity = (event) => {
    setNewItemQuantity(event.target.value);
  }

  const onChangeMeasure = (event) => {
    setNewItemMeasure(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(newItemQuantity && newItemMeasure && newItemName){
      addItem({ quantity: newItemQuantity, measure: newItemMeasure, name: newItemName });
      setOpenModal(false);
    } else {
      alert("Llene todos los campos para agregar un item a la lista.")
    }
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  return(
    <form onSubmit={onSubmit} className="form">
      <h3 className="form--title">Agrega un item a tu lista</h3>
      <div className="form--container">
        <div className="form--small-wrapper">
          <label htmlFor="quantity">Cantidad:</label>
          <div className="form--input-container">
            <input
              id="quantity"
              type="number"
              value = {newItemQuantity}
              onChange={onChangeQuantity}
              placeholder="1"/>
          </div>
        </div>
        <div className="form--small-wrapper">
          <label htmlFor="measure">Medida:</label>
          <div className="form--input-container">
            <input
              list="measures"
              id="measure"
              onChange={onChangeMeasure}
              placeholder="-medida-"
            />
            <datalist
              id="measures">
              <option value="kgs"/>
              <option value="lbs"/>
              <option value="unidad(es)"/>
            </datalist>
        </div>
        </div>
      </div>
      <div className="form--container">
        <label htmlFor="item-name">Item:</label>
        <div className="form--input-container">
          <textarea
            id="item-name"
            value = {newItemName}
            onChange={onChangeName}
            placeholder="Tomate"/>
        </div>
      </div>
      <div className="form--button-container">
        <button type="submit" className="form--button__submit">
          AGREGAR A LA LISTA
        </button>
        <button type="button" onClick={onCancel} className="form--button__cancel">
          Cancelar
        </button>
      </div>
    </form>
  );
}

export { ItemForm };