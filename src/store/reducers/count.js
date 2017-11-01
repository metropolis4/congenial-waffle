import * as R from 'ramda';

import * as actions from '../util/actions';

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return R.add(state, 1)
    case actions.DECREMENT:
      return R.subtract(state, 1)
    case actions.ADD_COUNT:
      return R.add(state, action.value)
    case actions.SUBTRACT_COUNT:
      return R.subtract(state, action.value)
    default:
      return state;
  }
};

export default countReducer;
