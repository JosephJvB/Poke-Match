import { RESET, WIN } from '../actions'

export default function win (state = false, action) {
  switch (action.type) {
    case WIN:
      return true
    case RESET:
      return false
    default:
      return state
  }
}
