import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import demo from './demo.reducer';

const rootReducer = combineReducers({
  routing,
  demo,
});

export default rootReducer;