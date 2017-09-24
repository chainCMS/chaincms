
window.Actions = window.Actions || {};

// Action creators

Actions = {
  incrementCounter: (id) => ({
    type: 'INCREMENT_COUNTER',
    id
  }),
  decrementCounter: (id) => ({
    type: 'DECREMENT_COUNTER',
    id
  }),
  incBoundCounter: () => ({
    type: 'INC_BOUND_COUNTER'
  }),
  decBoundCounter: () => ({
    type: 'DEC_BOUND_COUNTER'
  }),
  setBoundCounter: (value) => ({
    type: 'SET_BOUND_COUNTER',
    value
  }),
  changeScreen: (screen) => ({
    type: 'CHANGE_SCREEN',
    screen
  })
}