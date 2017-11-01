import * as R from 'ramda';

import makeId from '../util/make-id';
import * as actions from '../util/actions';

const resultsReducer = (state = [], action) => {
  switch (action.type) {
    case actions.STORE_RESULT:
      const newResult = {
        value: action.value,
        id: makeId.next().value
      };
      return R.insert(state.length - 1, newResult, state);
    case actions.DELETE_RESULT:
      return R.reject(({ id }) => id === action.id, state);
    default:
      return state;
  }
}

export default resultsReducer;
