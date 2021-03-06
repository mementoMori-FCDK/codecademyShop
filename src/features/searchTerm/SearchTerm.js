import React from 'react';
import { setSearchTerm, clearSearchTerm } from './searchTermSlice.js';
import { loadData, loadSearchTerm } from '../inventory/inventorySlice';

const searchIconUrl =
  'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl =
  'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

export const SearchTerm = (props) => {
  const { searchTerm, dispatch } = props;

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
    dispatch(loadData());
  };

  const onSearchTermEnterHandler = (e) => {
    if (e.key === 'Enter') {
      dispatch(loadSearchTerm(e.target.value));
    }
  }

  return (
    <div id="search-container">
      <img id="search-icon" alt="" src={searchIconUrl} />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchTermChangeHandler}
        onKeyDown={onSearchTermEnterHandler}
        placeholder="Search products"
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
        >
          <img src={clearIconUrl} alt="" />
        </button>
      )}
    </div>
  );
};
