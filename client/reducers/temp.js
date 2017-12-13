import { ADD_CELL } from '../actions'

export default function temp (state = [], action) {
  switch (action.type) {
    case ADD_CELL:
      return [...state, action.img]
    default:
      return state
  }
}
