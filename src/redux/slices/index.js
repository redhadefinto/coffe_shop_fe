import { combineReducers } from "@reduxjs/toolkit"; 

import counterSlice from './counter'
import userSlice from './users'
import authSlice from './auth'

const reducers = combineReducers({
  counter: counterSlice,
  userPlaceHolder: userSlice,
  auth: authSlice,
})

export default reducers;