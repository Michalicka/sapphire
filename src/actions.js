
import { INCREMENT, DECREMENT } from './actionTypes'

export function increment(payload) {
  return {
    type: INCREMENT
  }
}

export function decrement(payload) {
  return {
    type: DECREMENT
  }
}
