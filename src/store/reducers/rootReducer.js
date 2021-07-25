import {combineReducers} from 'redux'
import navbarReducer from './navbar'
import dataReducer from './data'
import authReducer from './auth'

export default combineReducers({
	navbar: navbarReducer,
	data: dataReducer,
	auth: authReducer,
})