import { combineReducers } from 'redux'
import { token } from './auth'
import { appData } from './appData'
import { questions } from './favorites'

const MIGHSchedulerApp = combineReducers({
  token,
  appData,
  questions
})

export default MIGHSchedulerApp
