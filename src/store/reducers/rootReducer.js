import {combineReducers} from 'redux'
import navbarReducer from './navbar'
import dataReducer from './data'

export default combineReducers({
	navbar: navbarReducer,
	data: dataReducer
})