import React from 'react';
import './App.css';
import { ListCounter } from './ListCounter';
import { ListSearch } from './ListSearch';
import { BuyingList } from './BuyingList';
import { ListItem } from './ListItem';
import { CreateItemButton } from './CreateItemButton';


const items = [
  { name: 'Cebolla', quantity: 1, measure: 'lbs', buyed: false},
  { name: 'Tomate', quantity: 1, measure: 'kg', buyed: false},
  { name: 'Zanahoria', quantity: 2, measure: 'lbs', buyed: false},
  { name: 'Lechuga', quantity: 1, measure: 'unidad(es)', buyed: false},
  { name: 'Manzana', quantity: 5, measure: 'unidad(es)', buyed: false},
  { name: 'Carne', quantity: 1, measure: 'kg', buyed: true},
]

function App() {
  return (
    <React.Fragment>
      <ListCounter />
      <ListSearch />
      <BuyingList>
        {items.map((item) => (
          <ListItem key = {item.name} text = {item.name} quantity = {item.quantity} measure = {item.measure} buyed = {item.buyed}/>
        ))}
      </BuyingList>
      <CreateItemButton />
    </React.Fragment>
  );
}

export default App;
