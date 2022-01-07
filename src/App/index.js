import React from 'react';
import { ItemProvider } from '../ItemContext';
import { AppUI } from './AppUI'



function App() {

  return (
    <ItemProvider>
      <AppUI />
    </ItemProvider>
  );
}

export default App;
