import {
	FETCH_POSTS,
	CHANGE_INPUT,
	RESET_CREATE,
	DELETE_POST,
	CHANGE_VALUE_POST,
	LOADER
} from './actionTypes'


export const loadPosts = () => {
	return async dispatch => {
		const res = await fetch('https://warzone-info-default-rtdb.europe-west1.firebasedatabase.app/Posts.json',{
			method: 'GET',
			headers: {'Content-Type': 'application/json'}
		})
		const data = await res.json()
		const posts = Object.keys(data).map(key => ({ ...data[key], id: key}))

		dispatch({
			type: FETCH_POSTS,
			payload: posts
		})
	}
}

export const changeInput = (type, value) => {
	return async dispatch => {
		const create = {
			type: type,
			value: {value: value}
		}

		dispatch({
			type: CHANGE_INPUT,
			payload: create
		})
	}
}

export const resetCreate = () => {
	return dispatch => {
		dispatch({
			type: RESET_CREATE,
		})
	}
}

export const deletePost = (id, token) => {
	return async dispatch => {

		await fetch(`https://warzone-info-default-rtdb.europe-west1.firebasedatabase.app/Posts/${id}.json?auth=${token}`,{
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'}
		})

		dispatch({
			type: DELETE_POST,
			payload: id
		})
	}
}

export const changeValuePost = (id) => {
	return async dispatch => {
		dispatch({
			type: CHANGE_VALUE_POST,
			payload: id
		})
	}
}

export const changePost = (id, title, desc, img, text, token) => {
	return async dispatch => {

		await fetch(`https://warzone-info-default-rtdb.europe-west1.firebasedatabase.app/Posts/${id}.json?auth=${token}`,{
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({title, desc, img, text})
		})

		await dispatch(loadPosts())
	}
}

export const loaderAction = () => {
	return dispatch => {
		dispatch({
			type: LOADER,
		})
	}
}