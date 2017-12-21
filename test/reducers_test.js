import checkReducer from '../client/reducers/check'
import countReducer from '../client/reducers/count'
import genReducer from '../client/reducers/gen'
import HoFReducer from '../client/reducers/HoF'
import solvedReducer from '../client/reducers/solved'
import tempReducer from '../client/reducers/temp'
import winReducer from '../client/reducers/win'

import { ADD_CELL, SOLVED_PAIR, CLEAR, ADD_COUNT, CHECK_PAIR, RESET, WIN, SAVE_GEN, SAVE_HOF, addCell, solvedPair, clear, addCount, checkPair, reset, win, saveGen, saveHoF } from '../client/actions'

test('checkReducer returns outcome on check', () => {
  const initialState = 'no chance'
  const action = { type: CHECK_PAIR, outcome: 'hell yeah buddy' }
  const newState = checkReducer(initialState, action)
  expect(newState).toBe('hell yeah buddy')
})

test('checkReducer clears on reset', () => {
  const initialState = 'remove me I dare you'
  const action = { type: RESET }
  const newState = checkReducer(initialState, action)
  expect(newState).toBe(null)
})

test('countReducer returns count on addCount', () => {
  const initialState = 4
  const action = { type: ADD_COUNT }
  const newState = countReducer(initialState, action)
  expect(newState).toBe(4)
})

test('countReducer clears on reset', () => {
  const initialState = 9000
  const action = { type: RESET }
  const newState = countReducer(initialState, action)
  expect(newState).toBe(null)
})

test('genReducer returns monsArray on save', () => {
  const initialState = []
  const action = { type: SAVE_GEN, mons: ['pikachu', 'james bond', 'barak obama'] }
  const newState = genReducer(initialState, action)
  expect(newState.length).toBe(3)
})

test('HoF reducer returns monsArray on save', () => {
  const initialState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const action = { type: SAVE_HOF, mons: ['pikachu', 'james bond', 'barak obama'] }
  const newState = HoFReducer(initialState, action)
  expect(newState.length).toBe(3)
})

test('HoF reducer clears on reset', () => {
  const initialState = ['pikachu', 'james bond', 'barak obama']
  const action = { type: RESET }
  const newState = HoFReducer(initialState, action)
  expect(newState).toBe([])
})

test('solved reducer returns array with multiple items', () => {
  const initialState = ['pikachu', 'james bond', 'barak obama']
  const action = { type: SOLVED_PAIR, pair: ['sam', 'joe'] }
  const newState = solvedReducer(initialState, action)
  expect(newState[0].length).toBe(3)
  expect(newState[1].length).toBe(2)
})

test('solved reducer clears on reset', () => {
  const initialState = [['pikachu', 'james bond', 'barak obama'], ['sam', 'joe']]
  const action = { type: RESET }
  const newState = solvedReducer(initialState, action)
  expect(newState).toBe([])
})

test('temp reducer returns array with multiple items', () => {
  const initialState = [{ brother: 'sam', me: 'joe' }]
  const action = { type: ADD_CELL, cell: { mum: 'barbara', dad: 'gerard' } }
  const newState = tempReducer(initialState, action)
  expect(newState).toEqual([{ brother: 'sam', me: 'joe' }, { mum: 'barbara', dad: 'gerard' }])
})

test('temp reducer clears on clear', () => {
  const initialState = [{ brother: 'sam', me: 'joe' }, { mum: 'barbara', dad: 'gerard' }]
  const action = { type: CLEAR }
  const newState = tempReducer(initialState, action)
  expect(newState).toBe([])
})

test('temp reducer clears on reset', () => {
  const initialState = [{ brother: 'sam', me: 'joe' }, { mum: 'barbara', dad: 'gerard' }]
  const action = { type: RESET }
  const newState = tempReducer(initialState, action)
  expect(newState).toBe([])
})

test('win reducer returns true on win', () => {
  const initialState = false
  const action = { type: WIN }
  const newState = winReducer(initialState, action)
  expect(newState).toBe(true)
})

test('win reducer returns false on reset', () => {
  const initialState = true
  const action = { type: RESET }
  const newState = winReducer(initialState, action)
  expect(newState).toBe(false)
})
