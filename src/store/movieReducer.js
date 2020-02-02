import { movieAPI } from '../api/api';

const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';
const FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS';

const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const UPDATE_TAGS = 'UPDATE_TAGS';

let initialState = {
  loading: false,
  list: null,
  favorites: null,
  current: null,
  error: null,
  pageCurrent: 1,
  pageSize: 10,
  tags: []
};

const updateTags = (state, tag) => {
  let newTags;
  const { tags } = state;

  const existTag = tags.find((pl) => pl === tag);
  if (existTag) {
    const idx = tags.findIndex((pl) => pl === existTag);
    const newArr = [...tags.slice(0, idx), ...tags.slice(idx + 1)];
    newTags = newArr;
  } else {
    const newArr = [...tags, tag];
    newTags = newArr;
  }

  return {
    ...state,
    tags: newTags,
  };
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        list: action.movies,
        error: null
      }
    }

    case FETCH_MOVIES_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }

    case FETCH_MOVIE_SUCCESS: {
      return {
        ...state,
        loading: false,
        current: action.current,
        error: null
      }
    }

    case FETCH_MOVIE_FAILURE: {
      return {
        ...state,
        loading: false,
        current: null,
        error: action.error
      }
    }

    case FETCH_FAVORITES_SUCCESS: {
      return {
        ...state,
        loading: false,
        favorites: action.favorites
      }
    }

    case FETCH_SEARCH_SUCCESS: {
      return {
        ...state,
        list: action.movies
      }
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        pageCurrent: action.current
      }
    }

    case UPDATE_TAGS:
      return updateTags(state, action.tag);

    default:
      return state;
  }
};

const moviesRequested = () => {
  return {
    type: FETCH_MOVIES_REQUEST
  }
};

const moviesLoaded = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies
  }
};

const moviesFailure = (error) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    error
  }
};

const movieLoaded = (current) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    current
  }
};

const movieFailure = (error) => {
  return {
    type: FETCH_MOVIE_FAILURE,
    error
  }
};

const favoritesLoaded = (favorites) => {
  return {
    type: FETCH_FAVORITES_SUCCESS,
    favorites
  }
};

export const getMovies = () => async dispatch => {
  dispatch(moviesRequested());
  movieAPI.getMovies()
    .then(res => dispatch(moviesLoaded(res)))
    .catch(err => dispatch(moviesFailure(err)))
};

export const getMovieById = (id) => async dispatch => {
  movieAPI.getMovieById(id)
    .then(res => dispatch(movieLoaded(res)))
    .catch(err => dispatch(movieFailure(err)))
};

export const getFavorites = (favorites) => async dispatch => {
  movieAPI.getFavorites(favorites)
    .then(res => dispatch(favoritesLoaded(res)))
};

export const getMoviesByTitle = (query) => async dispatch => {
  movieAPI.getMovieByTitle(query)
    .then(res => dispatch(moviesLoaded(res)))
    .catch(err => dispatch(moviesFailure(err)))
};

export const setPageCurrent = (current) => {
  return {
    type: SET_CURRENT_PAGE,
    current
  }
};

export const updateTag = (tag) => {
  return {
    type: UPDATE_TAGS,
    tag
  }
};

export default movieReducer;
