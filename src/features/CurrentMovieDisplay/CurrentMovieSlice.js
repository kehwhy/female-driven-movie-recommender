import { createSlice } from '@reduxjs/toolkit';
import { loadCurrentMovie } from '../../app/localstorage';

/**
 * Redux slice for Film list and showing Film list dialog box 
 * including name, initial state, reducers, actions, and selectors
 */
export const currentMovieSlice = createSlice({
  name: 'CurrentMovie',
  initialState: {
    movieInfo: {},
    ratingInfo: {},
    extraInfo: {},
    recommendations: [],
    isDialogShown: false
  },
  reducers: {
    setCurrentMovie: (state, action) => {
      state.movieInfo = action.payload;
    },
    addRatingInfoToCurrentMovie: (state, action) => {
      state.ratingInfo = action.payload;
    },
    addExtraInfoToCurrentMovie: (state, action) => {
      state.extraInfo = action.payload;
    },
    clearRecommendations: (state) => {
      state.recommendations = []
    },
    addRecommendations: (state, action) => {
      state.recommendations.push(action.payload)
    },
    openDialog: (state) => {
      state.isDialogShown = true;
    }, 
    closeDialog: (state) => {
      state.isDialogShown = false
    }
  },
});

export const { setCurrentMovie, addRatingInfoToCurrentMovie, addExtraInfoToCurrentMovie, clearRecommendations, addRecommendations, openDialog, closeDialog } = currentMovieSlice.actions;

export const selectCurrentMovie = state => state.currentMovie.movieInfo;

export const selectRatingInfo = state => state.currentMovie.ratingInfo;

export const selectExtraInfo = state => state.currentMovie.extraInfo;

export const selectRecommendations = state => state.currentMovie.recommendations;

export const selectIsDialogShown = state => state.currentMovie.isDialogShown

export default currentMovieSlice.reducer;
