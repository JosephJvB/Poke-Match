import { SOLVED_PAIR, RESET } from '../actions'

export default function solved (state = [], action) {
  switch (action.type) {
    case SOLVED_PAIR:
      return [...state, action.pair]
    case RESET:
      return []
    default:
      return state
  }
}
