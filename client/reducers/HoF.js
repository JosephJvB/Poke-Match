import { SAVE_HOF, RESET } from '../actions'

export default function HoF (state = [], action) {
  switch (action.type) {
    case SAVE_HOF:
      return action.mons
    case RESET:
      return []
    default:
      return state
  }
}
