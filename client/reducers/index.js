import { combineReducers } from 'redux'

import gen from './gen'
import temp from './temp'
import solved from './solved'
import count from './count'
import check from './check'
import win from './win'

export default combineReducers({
  gen,
  win,
  temp,
  solved,
  count,
  check
})
