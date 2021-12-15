import React from "react";
import { ItemContext } from "../ItemContext";
import { ListCounter } from '../ListCounter';
import { ListSearch } from '../ListSearch';
import { BuyingList } from '../BuyingList';
import { ListItem } from '../ListItem';
import { CreateItemButton } from '../CreateItemButton';
import { Modal } from "../Modal";
import { ItemForm } from "../ItemForm";
import { ListError } from "../ListError";
import { ListLoading } from "../ListLoading";
import { EmptyList } from "../EmptyList";

function AppUI() {
  const {
    error,
    loading,
    searchedItems,
    toggleBuyItem,
    deleteItem,
    openModal,
  } = React.useContext(ItemContext);
  return (
  <React.Fragment>
    <ListCounter />
    <ListSearch />

    <BuyingList>
      {error && <ListError />}
      {loading && <ListLoading />}
      {(!loading && !searchedItems.length) && <EmptyList />}

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
    {!!openModal && (
      <Modal>
        <ItemForm />
      </Modal>
    )}

    <CreateItemButton />
  </React.Fragment>
  );
}

export { AppUI }