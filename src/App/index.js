import React from 'react';
import { AppUI } from './AppUI'

// const defaultItems = [
//   { name: 'Cebolla', quantity: 1, measure: 'lbs', buyed: false},
//   { name: 'Tomate', quantity: 1, measure: 'kg', buyed: false},
//   { name: 'Zanahoria', quantity: 2, measure: 'lbs', buyed: true},
//   { name: 'Lechuga', quantity: 1, measure: 'unidad(es)', buyed: false},
//   { name: 'Manzana', quantity: 5, measure: 'unidad(es)', buyed: false},
//   { name: 'Carne', quantity: 1, measure: 'kg', buyed: true},
// ]

function useLocalStorage(itemName, initialValue){
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [item, setItem]=React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error)
      }
    }, 1000)
  })

  const saveItem = (newItem) => {
    try{
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error){
      setError(error)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
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

  // console.log('Render 1')
  
  // React.useEffect(() => {
  //   console.log('use effeect')
  // }, [totalItems]);
  
  // console.log('Render 2')

  return (
    <AppUI
      loading={loading}
      error={error}
      totalItems = {totalItems}
      buyedItems = {buyedItems}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedItems = {searchedItems}
      toggleBuyItem = {toggleBuyItem}
      deleteItem = {deleteItem}
    />
  );
}

export default App;
