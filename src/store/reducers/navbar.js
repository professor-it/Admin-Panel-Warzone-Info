const initialState = {
	links: {
		nav: [
			{
				title: 'Новости',
				url: '/news',
				createUrl: '/news/create',
				exact: true
			},
			{
				title: 'Статьи',
				url: '/articles',
				createUrl: '/articles/create',
				exact: true
			},
		],
		createNews: {
			title: 'Добавить новость',
			url: '/news/create',
			exact: true
		},
		createArticles: {
			title: 'Добавить Статью',
			url: '/news/create',
			exact: true
		},
	}
}

export default function navbarReducer(state=initialState, action) {

	switch (action.type) {
		default:
			return state
	}

}