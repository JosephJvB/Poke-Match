import { ADD_COUNT } from '../actions'

export default function count (state = null, action) {
  switch (action.type) {
    case ADD_COUNT:
      return action.count
    default:
      return state
  }
}
