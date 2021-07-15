import {FETCH_ARTICLES, FETCH_NEWS} from './actionTypes'

export const loadNews = () => {
	return async dispatch => {
		const res = await fetch('https://warzone-info-default-rtdb.europe-west1.firebasedatabase.app/Posts.json',{
			method: 'GET',
			headers: {'Content-Type': 'application/json'}
		})
		const data = await res.json()
		const posts = Object.values(data).filter(item => item.rub === 'news')

		dispatch({
			type: FETCH_NEWS,
			payload: posts
		})
	}
}

export const loadArticles = () => {
	return async dispatch => {
		const res = await fetch('https://warzone-info-default-rtdb.europe-west1.firebasedatabase.app/Posts.json',{
			method: 'GET',
			headers: {'Content-Type': 'application/json'}
		})
		const data = await res.json()
		const posts = Object.values(data).filter(item => item.rub === 'articles')

		dispatch({
			type: FETCH_ARTICLES,
			payload: posts
		})
	}
}