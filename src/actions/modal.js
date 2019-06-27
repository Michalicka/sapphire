
import { CHANGE_MODAL } from '../actionTypes/modal'

export const changeModal = (key, data) => ({
  type: CHANGE_MODAL,
  key,
  data
})
