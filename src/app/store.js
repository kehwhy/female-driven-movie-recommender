import { configureStore } from '@reduxjs/toolkit';
import currentMovieReducer from '../features/CurrentMovieDisplay/CurrentMovieSlice'
import recommendationsReducer from '../features/recommendationsSlice';
import searchResultsReducer from '../features/SearchResultsTable/searchResultsSlice'

export default configureStore({
  reducer: {
    currentMovie: currentMovieReducer, 
    searchResults: searchResultsReducer,
    recommendations: recommendationsReducer
  },
});
