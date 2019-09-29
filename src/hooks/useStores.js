import React, { useContext } from 'react';
import { AppContext } from '../components/App/AppContext';


function useStores(storeNames = []) {
  const context = useContext(AppContext);

  if (!storeNames.length || !Array.isArray(storeNames)) {
    throw `useStores must have an argument`;
  }

  const stores = {};
  storeNames.forEach(storeName => stores[storeName] = context[storeName]);

  return stores;
}

export default useStores;
