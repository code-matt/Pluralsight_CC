import { combineReducers } from 'redux'
import { token } from './auth'
import { appData } from './appData'
import { questions } from './favorites'
import { history } from './history'

const MIGHSchedulerApp = combineReducers({
  token,
  appData,
  questions,
  history
})

export default MIGHSchedulerApp
