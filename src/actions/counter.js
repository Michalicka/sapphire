
import types from '../actionTypes'

export default {
  increment() {
    return { type: types.counter.INCREMENT }
  },

  decrement() {
    return { type: types.counter.DECREMENT }
  }
}
