import { combineReducers } from 'redux'

import temp from './temp'
import solved from './solved'
import count from './count'
import check from './check'
import win from './win'

export default combineReducers({
  win,
  temp,
  solved,
  count,
  check
})
