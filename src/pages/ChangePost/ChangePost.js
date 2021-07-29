import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import classes from './ChangePost.module.scss'
import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
import Button from '../../components/Button/Button'
import {changePost, changeValuePost, loadPosts, resetCreate} from '../../store/actions/data'
import {useHistory} from 'react-router-dom'

const Create = () => {
	const url = window.location.pathname.split('/')
	const token = useSelector(state => state.auth.token)
	const create = useSelector(state => state.data.create)
	const dispatch = useDispatch()
	const history = useHistory()

	React.useEffect(async () => {
		await dispatch(changeValuePost(url[2]))
	}, [dispatch])

	const formSubmit = async (e) => {
		e.preventDefault()

		dispatch(changePost(url[2], create.title.value, create.desc.value, create.img.value, create.text.value, token))

		history.push(`/${url[1]}`)
	}

	return (
		<div className={classes.Create}>
			<form onSubmit={formSubmit}>
				{Object.values(create).map((e, index) => {
					if (e.type === 'input') {
						return (
							<Input key={index} label={e.label} value={e.value} name={e.name}/>
						)
					} else if (e.type === 'textarea') {
						return (
							<Textarea key={index} label={e.label} value={e.value} name={e.name} />
						)
					}
				})}
				<Button style='create' type='submit' button='Сохранить'/>
			</form>
		</div>
	)
}

export default Create