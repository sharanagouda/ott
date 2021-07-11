import thunk from 'redux-thunk';
import { createStore, combineReducers ,applyMiddleware, compose  } from 'redux';
import appReducer from '../reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const store = createStore(
    combineReducers({
      app: appReducer
    }),
   composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
