
import { CHANGE_MESSAGEBAR_PARAM } from '../actionTypes/messagebar'

export const changeMessagebarParam = (key, value) => ({
  type: CHANGE_MESSAGEBAR_PARAM,
  key,
  value
})
