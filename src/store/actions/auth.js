import {CHANGE_AUTHINPUT, AUTH_LOGIN, AUTH_LOGOUT, ERROR} from './actionTypes'
import axios from 'axios'

export const changeAuthInput = (type, value) => {
	return async dispatch => {
		const auth = {
			type: type,
			value: {value: value}
		}

		dispatch({
			type: CHANGE_AUTHINPUT,
			payload: auth
		})
	}
}

export const auth = (email, password, isLogin) => {
	return async dispatch => {
		const authData = {
			email, password,
			returnSecureToken: true
		}
		try {
			let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FB_KEY}`

			if (isLogin) {
				url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FB_KEY}`
			}

			const response = await axios.post(url, authData)
			const data = response.data

			const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

			localStorage.setItem('jwt-token', data.idToken)
			localStorage.setItem('userId', data.localId)
			localStorage.setItem('expirationDate', expirationDate)

			dispatch(authSuccess(data.idToken))
			dispatch(autoLogout(data.expiresIn))
		} catch (e) {
			dispatch({
				type: ERROR,
			})
		}
	}
}

export const autoLogout = (time) => {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout())
		}, time * 1000)
	}
}

export const logout = () => {
	localStorage.removeItem('jwt-token')
	localStorage.removeItem('userId')
	localStorage.removeItem('expirationDate')
	return {
		type: AUTH_LOGOUT,
		payload: null
	}
}

export const autoLogin = () => {
	return dispatch => {
		const token = localStorage.getItem('jwt-token')
		if (!token) {
			dispatch(logout())
		} else {
			const expirationDate = new Date(localStorage.getItem('expirationDate'))
			if (expirationDate <= new Date()) {
				dispatch(logout())
			} else {
				dispatch(authSuccess(token))
				dispatch(autoLogout((expirationDate.getTime() - new Date().getTime())/1000))
			}
		}
	}
}

export const authSuccess = (token) => {
	return {
		type: AUTH_LOGIN,
		payload: token
	}
}