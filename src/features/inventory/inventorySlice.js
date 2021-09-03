import { inventoryData } from '../../data.js';
import { SearchTerm } from '../searchTerm/SearchTerm.js';
import {dataSearch} from '../utilities/utilities';

export const loadData = () => {
  return {
    type: 'inventory/loadData',
    payload: inventoryData,
  };
};

export const loadSearchTerm = (searchTerm) => {
  const inventoryData = dataSearch(searchTerm);
  return {
    type: 'inventory/loadSearchTerm',
    payload: inventoryData
  };
}

const initialInventory = [];
export const inventoryReducer = (inventory = initialInventory, action) => {
  switch (action.type) {
    case 'inventory/loadData': {
      return action.payload;
    }
    case 'inventory/loadSearchTerm': {
      return action.payload;
    }
    default: {
      return inventory;
    }
  }
};

export default inventoryReducer
