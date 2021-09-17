import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import user from './slices/user'
const reducer = combineReducers({
  // here we will be adding reducers
  user,
})
const store = configureStore({
    reducer,
})
export default store;