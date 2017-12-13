export const ADD_CELL = 'ADD_CELL'
export const SOLVED_PAIR = 'SOLVED_PAIR'
export const CLEAR = 'CLEAR'

export const addTempCell = (img) => {
  return {
    type: ADD_CELL,
    img
  }
}

export const solvePair = (pair) => {
  return {
    type: SOLVED_PAIR,
    pair
  }
}

export const clearTemp = () => {
  return {
    type: CLEAR
  }
}
