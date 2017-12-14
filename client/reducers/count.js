import { ADD_COUNT, RESET } from '../actions'

export default function count (state = null, action) {
  switch (action.type) {
    case ADD_COUNT:
      return action.count
    case RESET:
      return null
    default:
      return state
  }
}
