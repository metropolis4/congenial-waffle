const redux = require('redux');

const initialState = {
  counter: 0
}
/**
 * REDUCER
 * - Reducers registered with the store are the only things allowed to interact with the
 *  store
 */
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return {
        counter: state.counter + 1
      };
      break;
    case 'ADD_COUNTER':
      return {
        counter: state.counter + action.value
      };
      break;
    default:
      return state;
  }
}

//STORE
const createStore = redux.createStore;
const store = createStore(rootReducer);

//SUBSCRIPTION
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

//ACTION
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
