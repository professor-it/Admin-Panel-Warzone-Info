import {
	CHANGE_INPUT, CHANGE_POST,
	CHANGE_VALUE_POST,
	DELETE_POST,
	FETCH_POSTS, LOADER,
	RESET_CREATE
} from '../actions/actionTypes'

const initialState = {
	posts: [],
	create: {
		title: {
			type: 'input',
			label: 'Заголовок',
			value: '',
			name: 'title'
		},
		desc: {
			type: 'input',
			label: 'Краткое описание',
			value: '',
			name: 'desc'
		},
		img: {
			type: 'input',
			label: 'Изображение',
			value: '',
			name: 'img'
		},
		text: {
			type: 'textarea',
			label: 'Статья',
			value: '',
			name: 'text'
		},
	},
	textarea: {
		type: 'textarea',
		label: 'Статья',
		value: '',
		name: 'text'
	},
	loading: true
}

const dataReducer = (state=initialState, action) => {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false
			}
		case CHANGE_INPUT:
			return {
				...state,
				create: {
					...state.create,
					[action.payload.type]: {
						...state.create[action.payload.type],
						...action.payload.value
					}
				}
			}
		case DELETE_POST:
			const post = state.posts.filter(e => e.id !== action.payload)
			return {
				...state,
				posts: [...post]
			}
		case CHANGE_VALUE_POST:
			const changePost = state.posts.find(e => e.id === action.payload)
			return {
				...state,
				create: {
					...state.create,
					title: {
						...state.create.title,
						value: changePost.title
					},
					desc: {
						...state.create.desc,
						value: changePost.desc
					},
					img: {
						...state.create.img,
						value: changePost.img
					},
					text: {
						...state.create.text,
						value: changePost.text
					}
				}
			}
		case RESET_CREATE:
			return {
				...state,
				create: {
					title: {
						type: 'input',
						label: 'Заголовок',
						value: '',
						name: 'title'
					},
					desc: {
						type: 'input',
						label: 'Краткое описание',
						value: '',
						name: 'desc'
					},
					img: {
						type: 'input',
						label: 'Изображение',
						value: '',
						name: 'img'
					},
					text: {
						type: 'textarea',
						label: 'Статья',
						value: '',
						name: 'text'
					}
				}
			}
		case LOADER:
			return {
				...state,
				loading: true
			}
		default:
			return state
	}
}

export default dataReducer