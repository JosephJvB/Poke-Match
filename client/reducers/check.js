import { CHECK_PAIR, CLEAR } from '../actions'

export default function check (state = null, action) {
  switch (action.type) {
    case CHECK_PAIR:
      return action.outcome
    case CLEAR:
      return null
    default:
      return state
  }
}
