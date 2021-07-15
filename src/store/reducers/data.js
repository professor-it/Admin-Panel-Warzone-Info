import {FETCH_ARTICLES, FETCH_NEWS} from '../actions/actionTypes'

const initialState = {
	news: [],
	articles: [],
	loading: true
}

const dataReducer = (state=initialState, action) => {
	switch (action.type) {
		case FETCH_NEWS:
			return {
				...state,
				news: action.payload,
				loading: false
			}
		case FETCH_ARTICLES:
			return {
				...state,
				articles: action.payload,
				loading: false
			}
		default:
			return state
	}
}

export default dataReducer