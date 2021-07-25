import React from 'react'
import {useSelector} from 'react-redux'
import Loader from 'react-loader-spinner'
import Card from '../../components/Card/Card'

const Posts = () => {
	const url = window.location.pathname.split('/')[1]
	const posts = useSelector(state => state.data.posts).filter(e => e.rub === url)
	const loading = useSelector(state => state.data.loading)

	if (loading) {
		return (
			<div style={{textAlign: 'center'}}>
				<Loader
					type="Oval"
					color="#2E3137"
					height={30}
					width={30}
				/>
			</div>
		)
	}

	if (posts.length === 0) {
		return (
			<div>Постов в этой категории нет. Создайте первый!</div>
		)
	}

	return (
		<div>
			{posts.map((e, index) => {

					return (
						<Card title={e.title} desc={e.desc} date={e.date} key={e.id} postId={e.id}/>
					)

			}).sort((a, b) => new Date(b.props.date) - new Date(a.props.date))}
		</div>
	)
}

export default Posts