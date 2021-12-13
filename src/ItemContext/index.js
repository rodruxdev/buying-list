import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ItemContext = React.createContext();

function ItemProvider(props) {
  const {item: items, saveItem: saveItems, loading, error,} = useLocalStorage('ITEMS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const buyedItems = items.filter(item => !!item.buyed).length;
  const totalItems = items.length;

  let searchedItems = [];

  if(searchValue.length < 1) {
    searchedItems = items
  } else {
    searchedItems = items.filter(item => {
      const itemText = item.name.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return itemText.includes(searchText);
    })
  }

  const toggleBuyItem = (text) => {
    const itemIndex = items.findIndex(item => item.name === text);
    const newItems = [...items];
    newItems[itemIndex].buyed = !newItems[itemIndex].buyed;
    saveItems(newItems);
  };

  const deleteItem = (text) => {
    const itemIndex = items.findIndex(item => item.name === text);
    const newItems = [...items];
    newItems.splice(itemIndex, 1);
    saveItems(newItems);
  };
  return (
    <ItemContext.Provider value={{
      loading,
      error,
      totalItems,
      buyedItems,
      searchValue ,
      setSearchValue,
      searchedItems,
      toggleBuyItem,
      deleteItem,
    }}>
      {props.children}
    </ItemContext.Provider>
  )
}

export { ItemContext, ItemProvider };