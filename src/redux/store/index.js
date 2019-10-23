import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';
import initialState from './initialState';


const middlewares = process.env.NODE_ENV !== 'production' ? [reduxImmutableStateInvariant.default(), thunk] : [thunk];

export default createStore(
  combineReducers(rootReducer),
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
