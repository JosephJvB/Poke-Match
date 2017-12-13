import { ADD_CELL, CLEAR } from '../actions'

export default function temp (state = [], action) {
  switch (action.type) {
    case ADD_CELL:
      return [...state, action.img]
    case CLEAR:
      return []
    default:
      return state
  }
}
