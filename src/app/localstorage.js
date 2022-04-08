/**
 * Loads Film list from local storage
 */
export const loadFilms = () => {
    try {
      const serializedState = localStorage.getItem('FilmList');
      if (serializedState === null) {
        return [];
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return [];
    }
};

/**
 * Saves provided Film list to local storage
 * @param {Object[]} Films 
 */
export const saveFilms = (Films) => {
    try {
      const serializedState = JSON.stringify(Films);
      localStorage.setItem('FilmList', serializedState);
    } catch {
    }
  };


  /**
 * Loads current movie from local storage
 */
export const loadCurrentMovie = () => {
  try {
    const serializedState = localStorage.getItem('CurrentMovie');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

/**
 * Saves provided Film list to local storage
 * @param {Object[]} Films 
 */
 export const saveCurrentMovie = (movie) => {
  try {
    const serializedState = JSON.stringify(movie);
    localStorage.setItem('CurrentMovie', serializedState);
  } catch {
  }
};