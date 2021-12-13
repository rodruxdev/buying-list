import React from "react";
import { ItemContext } from "../ItemContext";
import { ListCounter } from '../ListCounter';
import { ListSearch } from '../ListSearch';
import { BuyingList } from '../BuyingList';
import { ListItem } from '../ListItem';
import { CreateItemButton } from '../CreateItemButton';

function AppUI() {
  const {
    error,
    loading,
    searchedItems,
    toggleBuyItem,
    deleteItem,
  } = React.useContext(ItemContext);
  return (
  <React.Fragment>
    <ListCounter />
    <ListSearch />

    <BuyingList>
      {error && <p>Hubo un error...</p>}
      {loading && <p>Cargando la lista de compras...</p>}
      {(!loading && !searchedItems.length) && <p>Crea el primer item para comprar</p>}

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

export { AppUI }