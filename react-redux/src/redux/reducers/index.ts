
import { combineReducers } from 'redux'
import { authReducer as auth } from './authReducer'

export const rootReducer = combineReducers({
    // Add reducers here
    auth,

})