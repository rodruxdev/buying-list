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
import { ChangeAlertWithStorageListener } from '../ChangeAlert';



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
    setOpenModal,
    sincronizeItem
  } = useItem();

  return (
  <React.Fragment>
    <ListHeader loading={loading} >
      <ListCounter
        totalItems = {totalItems}
        buyedItems = {buyedItems}
      />
     <ListSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </ListHeader>

    <BuyingList
      error={error}
      loading={loading}
      searchedItems={searchedItems}
      totalItems={totalItems}
      searchText={searchValue}
      onError={() => <ListError />}
      onLoading={() => <ListLoading />}
      onEmpty={() => <EmptyList />}
      onEmptySearch={
        (searchText) => <p>No hay resultados para {searchText}</p>
      }
      render={(item) => (
        <ListItem
          key = {item.name}
          text = {item.name}
          quantity = {item.quantity}
          measure = {item.measure}
          buyed = {item.buyed}
          toggleBuyed = {() => toggleBuyItem(item.name)}
          onDelete = {() => deleteItem(item.name)}
        />)}
    />

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
    <ChangeAlertWithStorageListener sincronize={sincronizeItem} />
  </React.Fragment>
  );
}

export default App;
