import { combineReducers } from 'redux'

import temp from './temp'
import solved from './solved'
import count from './count'
import check from './check'

export default combineReducers({
  temp,
  solved,
  count,
  check
})
