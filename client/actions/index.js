export const ADD_CELL = 'ADD_CELL'
export const SOLVED_PAIR = 'SOLVED_PAIR'
export const CLEAR = 'CLEAR'
export const ADD_COUNT = 'ADD_COUNT'
export const CHECK_PAIR = 'CHECK_PAIR'
export const RESET = 'RESET'
export const WIN = 'WIN'
export const SAVE_GEN = 'SAVE_GEN'
export const SAVE_HOF = 'SAVE_HOF'

export const addTempCell = (img, id) => {
  return {
    type: ADD_CELL,
    cell: {img, id}
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

export const addCount = (count) => {
  return {
    type: ADD_COUNT,
    count
  }
}

export const checkPair = (outcome) => {
  return {
    type: CHECK_PAIR,
    outcome
  }
}

export const reset = () => {
  return {
    type: RESET
  }
}

export const win = () => {
  return {
    type: WIN
  }
}

export const saveGen = (mons) => {
  return {
    type: SAVE_GEN,
    mons
  }
}

export const saveHoF = (mons) => {
  return {
    type: SAVE_HOF,
    mons
  }
}
