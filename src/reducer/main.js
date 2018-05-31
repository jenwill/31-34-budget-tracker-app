const { createStore } = require('redux');

const DEFAULT_STATE = 0;

const counterReducer = (previousState = DEFAULT_STATE, action) => {
  const {type, payload = 1 } = action;

  switch (type) {
    case 'INCREMENT_COUNTER':
      return previousState + payload;
    case 'DECREMENT_COUNTER':
      return previousState - payload;
    default:
      return previousState;
  }
};

const store = createStore(counterReducer);
store.dispatch({ type: 'INCREMENT_COUNTER', payload: 1 });
store.dispatch({ type: 'DECREMENT_COUNTER', payload: 1 });
