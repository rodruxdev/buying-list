import React from 'react';
import './App.css';
import { ListCounter } from './ListCounter';
import { ListSearch } from './ListSearch';
import { BuyingList } from './BuyingList';
import { ListItem } from './ListItem';
import { CreateItemButton } from './CreateItemButton';


const defaultItems = [
  { name: 'Cebolla', quantity: 1, measure: 'lbs', buyed: false},
  { name: 'Tomate', quantity: 1, measure: 'kg', buyed: false},
  { name: 'Zanahoria', quantity: 2, measure: 'lbs', buyed: true},
  { name: 'Lechuga', quantity: 1, measure: 'unidad(es)', buyed: false},
  { name: 'Manzana', quantity: 5, measure: 'unidad(es)', buyed: false},
  { name: 'Carne', quantity: 1, measure: 'kg', buyed: true},
]

function App() {
  const [items, setItems]=React.useState(defaultItems)
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
    setItems(newItems);
  };

  const deleteItem = (text) => {
    const itemIndex = items.findIndex(item => item.name === text);
    const newItems = [...items];
    newItems.splice(itemIndex, 1);
    setItems(newItems);
  };

  return (
    <React.Fragment>
      <ListCounter
        total = {totalItems}
        buyed = {buyedItems}
      />
      <ListSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <BuyingList>
        {searchedItems.map((item) => (
          <ListItem 
            key = {item.name}
            text = {item.name}
            quantity = {item.quantity}
            measure = {item.measure}
            buyed = {item.buyed}
            toggleBuyed = {() => toggleBuyItem(item.name)}
            onDelete = {() => deleteItem(item.name)}
          />
        ))}
      </BuyingList>
      <CreateItemButton />
    </React.Fragment>
  );
}

export default App;
