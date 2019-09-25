import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import initialState from './initialState';
import reducers from '../reducers';

const middlewares = process.env.NODE_ENV !== 'production' ? [require('redux-immutable-state-invariant').default(), thunk] : [thunk];

export default createStore(
  combineReducers(reducers),
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
