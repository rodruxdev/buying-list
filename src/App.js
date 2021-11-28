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
]

function App() {
  return (
    <React.Fragment>
      <ListCounter />
      <ListSearch />
      <BuyingList>
        {items.map((item) => (
          <ListItem key = {item.name} text = {item.name} quantity = {item.quantity} measure = {item.measure} />
        ))}
      </BuyingList>
      <CreateItemButton />
    </React.Fragment>
  );
}

export default App;
