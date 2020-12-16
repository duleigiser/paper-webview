import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const extension = window.__REDUX_DEVTOOLS_EXTENSION__;
const devTool = extension ? extension() : f => f;

export const store = createStore(
  rootReducer,
  {},
  compose(
    // compose
    applyMiddleware(ReduxThunk),
    devTool
  )
);
