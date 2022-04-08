import { createSlice } from '@reduxjs/toolkit';
import allRecommendationsJson from '../json/all_recommendations.json'
import femaleDirectedJson from '../json/female_directed_movies.json'
import femaleCastScoresJson from '../json/scored_movies_cast.json'
import femaleCountJson from '../json/counted_movies_cast_and_crew.json'
import femaleCrewScoresJson from '../json/scored_movies_crew.json'
import femaleCastAndCrewScoresJson from '../json/scored_movies_cast_and_crew.json'

/**
 * Redux slice for Film list and showing Film list dialog box 
 * including name, initial state, reducers, actions, and selectors
 */
export const recommendationsSlice = createSlice({
  name: 'Recommendations',
  initialState: {
    allRecommendations: allRecommendationsJson,
    femaleDirected: femaleDirectedJson,
    femaleCastScores: femaleCastScoresJson,
    femaleCrewScores: femaleCrewScoresJson,
    femaleCastAndCrewScores: femaleCastAndCrewScoresJson,
    femaleCount: femaleCountJson
  },
  reducers: {

  },
});

// export const { setCurrentMovie, addRatingInfoToCurrentMovie, addExtraInfoToCurrentMovie, openDialog, closeDialog } = currentMovieSlice.actions;

export const selectAllRecommendations = state => state.recommendations.allRecommendations;

export const selectFemaleDirected = state => state.recommendations.femaleDirected

export const selectFemaleCastScores = state => state.recommendations.femaleCastScores

export const selectFemaleCrewScores = state => state.recommendations.femaleCrewScores

export const selectFemaleCastAndCrewScores = state => state.recommendations.femaleCastAndCrewScores

export const selectFemaleCount = state => state.recommendations.femaleCount

export default recommendationsSlice.reducer;
