import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadNews} from '../../store/actions/data'
import classes from './News.module.scss'

import Loader from 'react-loader-spinner'
import CreateIcon from '@material-ui/icons/Create'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

const News = () => {
	const data = useSelector(state => state.data.news)
	const loading = useSelector(state => state.data.loading)

	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(loadNews())
	}, [dispatch])

	if (loading) {
		return (
			<div style={{textAlign: 'center'}}>
				<Loader
					type="Oval"
					color="#00BFFF"
					height={30}
					width={30}
				/>
			</div>
		)
	}

	return (
		<div>
			{data.map((e, index) => {
				return (
					<div className={classes.Card} key={index}>
						<div className={classes.CardInfo}>
							<h2>{e.title}</h2>
							<div>{e.desc}</div>
							<span>{e.date}</span>
						</div>
						<div className={classes.CardButton}>
							<div className={`${classes.Button} ${classes.Change}`}><span><CreateIcon/></span>Изменить</div>
							<div className={`${classes.Button} ${classes.Del}`}><span><DeleteForeverIcon/></span>Удалить</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default News