export const setSearchTerm = (term) => {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  };
};

export const clearSearchTerm = () => {
  return {
    type: 'searchTerm/clearSearchTerm'
  };
};

const initialSearch = {term: ''};
export const searchTermReducer = (search = initialSearch, action) => {
  switch(action.type) {
    case 'searchTerm/setSearchTerm': {
      const input = action.payload;
      return {...search, term: input};
    }
    case 'searchTerm/clearSearchTerm': {
      return {...search, term: ''};
    }
    default: {
      return search;
    }
  }
};
