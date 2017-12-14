import { SOLVED_PAIR } from '../actions'

export default function solved (state = [], action) {
  switch (action.type) {
    case SOLVED_PAIR:
      return [...state, action.pair]
    default:
      return state
  }
}
