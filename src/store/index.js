import { combineReducers } from 'redux';

import count from './reducers/count';
import results from './reducers/results';

const rootReducer = combineReducers({
  count,
  results
});
export default rootReducer;
