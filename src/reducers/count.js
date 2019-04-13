
import types from '../actionTypes'

function count(state = 0, action) {
  switch (action.type) {
    case types.counter.INCREMENT:
      return state + 1
    case types.counter.DECREMENT:
      return state - 1
    default:
      return state
  }
}

export default count
