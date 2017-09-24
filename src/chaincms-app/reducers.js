
(() => {
  function counters(state, action) {
    if (!state) {
      state = [
        {
          id: 0,
          value: 4,
        },
        {
          id: 1,
          value: 42,
        }
      ];
    }

    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return state.map((counter) => {
          if (counter.id !== action.id) {
            return counter;
          }

          return Object.assign({}, counter, {
            value: counter.value + 1,
          });
        });
      case 'DECREMENT_COUNTER':
        return state.map((counter) => {
          if (counter.id !== action.id) {
            return counter;
          }

          return Object.assign({}, counter, {
            value: counter.value - 1,
          });
        });
      default:
        return state;
    }
  }

  function screen(state, action) {
    if (!state) {
      state = 'view1';
    }

    switch (action.type) {
      case 'CHANGE_SCREEN':
        return action.screen || 'view1';
      default:
        return state;
    }
  }

  function boundCounter(state, action) {
    if (!state) {
      state = 12;
    }

    switch (action.type) {
      case 'INC_BOUND_COUNTER':
        return state + 1;
      case 'DEC_BOUND_COUNTER':
        return state - 1;
      case 'SET_BOUND_COUNTER':
        return !isNaN(action.value) ? action.value : 12;
      default:
        return state;
    }
  }

  reducer = Redux.combineReducers({
    counters,
    screen,
    boundCounter
  });

})();