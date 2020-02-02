import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import movieReducer from './movieReducer';
import appReducer from './appReducer';

let reducers = combineReducers({
  app: appReducer,
  movies: movieReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
