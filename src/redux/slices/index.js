import { combineReducers } from "@reduxjs/toolkit"; 

import counterSlice from './counter'
import userSlice from './users'
import authSlice from './auth'
import profileSlice from "./profile";
// import profilePatchSlice from './profilePatch'
import profileUpdateSlice from './profileUpdate'
const reducers = combineReducers({
  counter: counterSlice,
  userPlaceHolder: userSlice,
  auth: authSlice,
  profile: profileSlice,
  profileUpdate: profileUpdateSlice
})

export default reducers;