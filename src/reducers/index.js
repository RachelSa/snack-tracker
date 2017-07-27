import snackReducer from './snackReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  snackReducer,
  userReducer
})
