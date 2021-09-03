import { inventoryData } from '../../data';

export const dataSearch = (searchTerm) => {
  const filteredInventory = inventoryData.filter(item => {
    return item.name.toLocaleUpperCase().includes(searchTerm.toLocaleUpperCase());
  });
  return filteredInventory;
} 

export function calculatePrice(price, currency) {
  switch (currency) {
    case 'EUR':
      return price * 0.86;
    case 'CAD':
      return price * 1.33;
    default:
      return price;
  }
}

export function calculateTotal(cart, currency) {
  let totalUSD = 0;
  Object.keys(cart).forEach((itemName) => {
    totalUSD += cart[itemName].price * cart[itemName].quantity;
  });
  return calculatePrice(totalUSD, currency).toFixed(2);
}

export function getCurrencySymbol(currencyFilter) {
  switch (currencyFilter) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'CAD':
      return '$';
    default:
      return '';
  }
}
