import React from "react";
import { ItemContext } from "../ItemContext";
import { ListCounter } from '../ListCounter';
import { ListSearch } from '../ListSearch';
import { BuyingList } from '../BuyingList';
import { ListItem } from '../ListItem';
import { CreateItemButton } from '../CreateItemButton';

function AppUI() {
  return (
  <React.Fragment>
    <ListCounter />
    <ListSearch />

    <ItemContext.Consumer>
      {({
        error,
        loading,
        searchedItems,
        toggleBuyItem,
        deleteItem,
      }) => (
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
      )
      }
    </ItemContext.Consumer>
    <CreateItemButton />
  </React.Fragment>
  );
}

export { AppUI }