import { SAVE_GEN } from '../actions'

export default function gen (state = [], action) {
  switch (action.type) {
    case SAVE_GEN:
      return action.mons
    default:
      return state
  }
}
