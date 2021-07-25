import {AUTH_LOGIN, CHANGE_AUTHINPUT, AUTH_LOGOUT, ERROR} from '../actions/actionTypes'

const initialState = {
	auth: {
		email: {
			el: 'input',
			label: 'Логин',
			value: '',
			name: 'email',
			type: 'text'
		},
		password: {
			el: 'input',
			label: 'Пароль',
			value: '',
			name: 'password',
			type: 'password'
		}
	},
	token: localStorage.getItem('jwt-token'),
	loading: true,
	error: false
}

const authReducer = (state=initialState, action) => {
	switch (action.type) {
		case CHANGE_AUTHINPUT:
			return {
				...state,
				auth: {
					...state.auth,
					[action.payload.type]: {
						...state.auth[action.payload.type],
						...action.payload.value
					}
				}
			}
		case AUTH_LOGIN:
			return {
				...state,
				token: action.payload,
				error: false
			}
		case AUTH_LOGOUT:
			return {
				...state,
				token: action.payload
			}
		case ERROR:
			return {
				...state,
				error: true
			}
		default:
			return state
	}
}

export default authReducer