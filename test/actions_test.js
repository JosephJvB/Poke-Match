import { ADD_CELL, SOLVED_PAIR, CLEAR, ADD_COUNT, CHECK_PAIR, RESET, WIN, SAVE_GEN, SAVE_HOF, addCell, solvedPair, clear, addCount, checkPair, reset, win, saveGen, saveHoF } from '../client/actions'

test('addCell has the correct shape', () => {
  const action = addCell('xmas family photo', 4)
  expect(action.type).toBe(ADD_CELL)
  expect(action.cell).toEqual({ img: 'xmas family photo', id: 4 })
})

test('solvedPair has the correct shape', () => {
  const action = solvedPair(['tweedledumb', 'tweedledee'])
  expect(action.type).toBe(SOLVED_PAIR)
  expect(action.pair[0]).toBe('tweedledumb')
  expect(action.pair[1]).toBe('tweedledee')
})

test('clear has the correct type', () => {
  const action = clear()
  expect(action).toEqual({ type: CLEAR })
})

test('addCount has the correct shape', () => {
  const action = addCount(151)
  expect(action.type).toBe(ADD_COUNT)
  expect(action.count).toBe(151)
})

test('checkPair has the correct shape', () => {
  const action = checkPair('great success')
  expect(action.type).toBe(CHECK_PAIR)
  expect(action.outcome).toBe('great success')
})

test('reset has the correct type', () => {
  expect(reset()).toEqual({ type: RESET })
})

test('win has the correct type', () => {
  expect(win().type).toBe(WIN)
})

test('saveGen has the correct shape', () => {
  const action = saveGen(['pikachu', 'james bond', 'barak obama'])
  expect(action.type).toBe(SAVE_GEN)
  expect(action.mons[0]).toBe('pikachu')
  expect(action.mons[1]).toBe('james bond')
  expect(action.mons[2]).toBe('barak obama')
})

test('hallOfFame has the correct shape', () => {
  const action = saveHoF(['pikachu', 'james bond', 'barak obama'])
  expect(action.type).toBe(SAVE_HOF)
  expect(action.mons[0]).toBe('pikachu')
  expect(action.mons[1]).toBe('james bond')
  expect(action.mons[2]).toBe('barak obama')
})