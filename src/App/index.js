import React from 'react';
import { useItem } from "./useItem";
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
import { ListHeader } from "../ListHeader";



function App() {
  const {
    error,
    loading,
    searchedItems,
    toggleBuyItem,
    deleteItem,
    openModal,
    totalItems,
    buyedItems,
    searchValue,
    setSearchValue,
    addItem,
    setOpenModal
  } = useItem();

  return (
  <React.Fragment>
    <ListHeader>
      <ListCounter
        totalItems = {totalItems}
        buyedItems = {buyedItems}
      />
      <ListSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </ListHeader>

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
        <ItemForm
          addItem={addItem}
          setOpenModal={setOpenModal}
        />
      </Modal>
    )}

    <CreateItemButton
      openModal={openModal}
      setOpenModal={setOpenModal}
    />
  </React.Fragment>
  );
}

export default App;
