import React from "react";

function useLocalStorage(itemName, initialValue){
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
  const {
    sincronizedItem,
    error,
    loading,
    item,
    } = state;

  //ACTION CREATORS
  const onError = (error) => dispatchEvent({ type: actionTypes.error, payload: error });
  const onSuccess = (item) => dispatch({type: actionTypes.success, payload: item, })
  const onSave = (item) => dispatch({type: actionTypes.save, payload: item, })
  const onSincronize = () => dispatch({type: actionTypes.sincronize })

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem

        // Si el elemento no esta creado en Local Storage, lo inicializa
        // Si existe el elemento, lo parsea para enviarlo al componente.
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem)
      } catch(error) {
        onError(error)
      }
    }, 1500)
  }, [sincronizedItem])

  // Funcion para guardar items en Local Storage
  const saveItem = (newItem) => {
    try{
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem)
    } catch(error){
      onError(error)
    }
  }

  const sincronizeItem = () => {
    onSincronize()
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

const initialState = ({ initialValue}) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

// Action Types para el reducerObject
const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE'
};

// reducerObject con cambios en el estado segun Action Types
const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  }
});

// Funcion reducer para useReducer
const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };