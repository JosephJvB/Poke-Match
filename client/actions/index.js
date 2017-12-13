export const ADD_CELL = 'ADD_CELL'
export const SOLVED_PAIR = 'SOLVED_PAIR'

export const addCell = (img) => {
  return {
    type: ADD_CELL,
    img
  }
}

export const solvedPair = (pair) => {
  return {
    type: SOLVED_PAIR,
    pair
  }
}
