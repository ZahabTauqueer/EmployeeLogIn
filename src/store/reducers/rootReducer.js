import loginReducer from './loginReducer'
import employeeReducer from './employeeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  login: loginReducer,
  employee: employeeReducer
});

export default rootReducer
