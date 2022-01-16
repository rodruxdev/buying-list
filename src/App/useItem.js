import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function useItem() {
  const {item: items, saveItem: saveItems, sincronizeItem, loading, error,} = useLocalStorage('ITEMS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const buyedItems = items.filter(item => !!item.buyed).length;
  const totalItems = items.length;

  let searchedItems = [];

  // Comprobamos si se realiza una busqueda.
  if(searchValue && searchValue.length < 1) {
    // Mantenemos todos los items si no se realiza una busqueda.
    searchedItems = items
  } else {
    //  Obtenemos los items que corresponen a la busqueda.
    searchedItems = items.filter(item => {
      const itemText = `${item.quantity.toLowerCase()} ${item.measure.toLowerCase()} ${item.name.toLowerCase()}`;
      const searchText = searchValue.toLowerCase();

      return itemText.includes(searchText);
    })
  }

  // Agregamos un nuevo item y lo mandamos a guardarse en Locale Storage
  const addItem = ({ quantity, measure, name}) => {
    const newItems = [...items];
    newItems.push({
      quantity,
      measure,
      name,
      buyed: false,
    })
    saveItems(newItems);
  }

  // Funcion para tachar o destachar un item de la lsita
  const toggleBuyItem = (text) => {
    const itemIndex = items.findIndex(item => item.name === text);
    const newItems = [...items];
    newItems[itemIndex].buyed = !newItems[itemIndex].buyed;
    saveItems(newItems);
  };

  // Funcion para eliminar un item de la lista
  const deleteItem = (text) => {
    const itemIndex = items.findIndex(item => item.name === text);
    const newItems = [...items];
    newItems.splice(itemIndex, 1);
    saveItems(newItems);
  };

  const state = {
    loading,
    error,
    totalItems,
    searchedItems,
    buyedItems,
    searchValue ,
    openModal,
  };

  const stateUpdaters = {
    setSearchValue,
    addItem,
    toggleBuyItem,
    deleteItem,
    setOpenModal,
    sincronizeItem,
  }

  return { state, stateUpdaters };
}

export { useItem };