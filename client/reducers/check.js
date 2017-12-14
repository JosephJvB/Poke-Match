import { CHECK_PAIR, RESET } from '../actions'

export default function check (state = null, action) {
  switch (action.type) {
    case CHECK_PAIR:
      return action.outcome
    case RESET:
      return null
    default:
      return state
  }
}
