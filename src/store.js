import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = initialState => {
  const middleware = [thunk];
  middleware.push(createLogger({ collapsed: true }));
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware), f => f),
  );
};
export default store;
