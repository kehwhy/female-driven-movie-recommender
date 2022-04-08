import { createSlice } from '@reduxjs/toolkit';

/**
 * Redux slice for search results including name, initial state, reducers, actions, and selectors
 */
export const searchResultsSlice = createSlice({
  name: 'Search Results',
  initialState: {
    list: [],
    totalResults: 0
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.list = action.payload;
    },
    clearSearchResults: (state) => {
        state.list = []
    }, 
    addSearchResults: (state, action) => {
      state.list = state.list.concat(action.payload);
    },
    setTotalResults: (state, action) => {
      state.totalResults = action.payload
    }
  },
});

export const { setSearchResults, clearSearchResults, addSearchResults, setTotalResults } = searchResultsSlice.actions;

export const selectSearchResults = state => state.searchResults.list;

export const selectSearchTotal = state => state.searchResults.totalResults;

export default searchResultsSlice.reducer;
