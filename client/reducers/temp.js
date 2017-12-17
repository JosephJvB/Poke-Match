import { ADD_CELL, CLEAR, RESET } from '../actions'

export default function temp (state = [], action) {
  switch (action.type) {
    case ADD_CELL:
      return [...state, action.cell]
    case RESET:
      return []
    case CLEAR:
      return []
    default:
      return state
  }
}
