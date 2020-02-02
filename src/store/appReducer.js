const UPDATE_FAVORITE = 'UPDATE_FAVORITE';
const UPDATE_TAB = 'UPDATE_TAB';

const initSelected = JSON.parse(localStorage.getItem('favorites'))
  ? JSON.parse(localStorage.getItem('favorites'))
  : [];

const initTab = localStorage.getItem('currentTab')
  ? localStorage.getItem('currentTab')
  : 'all';

localStorage.setItem('currentTab', initTab);

let initialState = {
  favorites: initSelected,
  currentTab: initTab
};

const updateSelected = (state, movie) => {
  let newSelected = [];
  const { favorites } = state;

  const existMovie = favorites.find((pl) => pl === movie);
  if (existMovie) {
    const idx = favorites.findIndex((pl) => pl === existMovie);
    const newArr = [...favorites.slice(0, idx), ...favorites.slice(idx + 1)];
    newSelected = newArr;
  } else {
    const newArr = [...favorites, movie];
    newSelected = newArr;
  }

  localStorage.setItem('favorites', JSON.stringify(newSelected));

  return {
    ...state,
    favorites: newSelected,
  };
};

const updateCurrentTab = (state, tab) => {
  localStorage.setItem('currentTab', tab);

  return {
    ...state,
    currentTab: tab
  }
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FAVORITE: {
      return updateSelected(state, action.id);
    }

    case UPDATE_TAB: {
      return updateCurrentTab(state, action.tab)
    }

    default:
      return state
  }
};

export const updateFavorite = (id) => ({
  id,
  type: UPDATE_FAVORITE,
});

export const updateTab = (tab) => ({
  tab,
  type: UPDATE_TAB
});

export default appReducer;
