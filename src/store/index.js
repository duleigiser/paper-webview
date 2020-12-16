import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
// const devTool = extension ? extension() : f => f;

export const store = createStore(
  rootReducer,
  {},
  composeEnhancer(
    // compose
    applyMiddleware(ReduxThunk)
  )
);
