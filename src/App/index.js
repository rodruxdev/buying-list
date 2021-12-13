import React from 'react';
import { ItemProvider } from '../ItemContext';
import { AppUI } from './AppUI'

// const defaultItems = [
//   { name: 'Cebolla', quantity: 1, measure: 'lbs', buyed: false},
//   { name: 'Tomate', quantity: 1, measure: 'kg', buyed: false},
//   { name: 'Zanahoria', quantity: 2, measure: 'lbs', buyed: true},
//   { name: 'Lechuga', quantity: 1, measure: 'unidad(es)', buyed: false},
//   { name: 'Manzana', quantity: 5, measure: 'unidad(es)', buyed: false},
//   { name: 'Carne', quantity: 1, measure: 'kg', buyed: true},
// ]


function App() {

  return (
    <ItemProvider>
      <AppUI />
    </ItemProvider>
  );
}

export default App;
