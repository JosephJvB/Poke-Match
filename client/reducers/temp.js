import { ADD_CELL, CLEAR, RESET } from '../actions'

export default function temp (state = [], action) {
  switch (action.type) {
    case ADD_CELL:
      return [...state, action.img]
    case CLEAR || RESET:
      return []
    default:
      return state
  }
}
