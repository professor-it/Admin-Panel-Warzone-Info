import React from 'react'
import classes from './Card.module.scss'
import Button from '../Button/Button'
import formatDate from '../../helpers/formatDate'
import {useDispatch, useSelector} from 'react-redux'
import {deletePost} from '../../store/actions/data'
import { useHistory } from "react-router-dom";

const Card = ({title, desc, date, postId}) => {
	const token = useSelector(state => state.auth.token)
	const url = window.location.pathname.split('/')[1]

	const history = useHistory()
	const dispatch = useDispatch()

	const changeClick = (id) => {
		history.push(`${url}/${postId}`)
	}
	const delClick = () => {
		deletePost(dispatch(deletePost(postId, token)))
	}

	return (
		<div className={classes.Card}>
			<div className={classes.CardInfo}>
				<div className={classes.date}>{formatDate(date)}</div>
				<div className={classes.title}>{title}</div>
				<div className={classes.desc}>{desc}</div>
			</div>
			<div className={classes.CardButton}>
				<Button style='change' onPress={changeClick}/>
				<Button style='del' onPress={delClick}/>
			</div>
		</div>
	)
}

export default Card