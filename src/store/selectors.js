import { createSelector } from 'reselect';

const getMovies = (state) => {
  return state.movies.list
};

export const getPageCurrent = (state) => {
  return state.movies.pageCurrent;
};

export const getPageSize = (state) => {
  return state.movies.pageSize;
};

export const getPageTotal = (state) => {
  if (!state.movies.list) return 1;
  return state.movies.list.length;
};

export const getSelectedTags = (state) => {
  return state.movies.tags;
};

export const getMoviesReselect = createSelector(
  getMovies,
  getPageCurrent,
  getPageSize,
  getSelectedTags,
  (movies, pageCurrent, pageSize, tags) => {
    if (!movies) return null;

    if (tags.length > 0) {
      const filtered = movies.filter(d => d.tags.some(c => tags.includes(c)));
      return filtered;
    }

    return movies.slice(0, pageSize * pageCurrent);
  });


