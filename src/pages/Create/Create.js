import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import classes from './Create.module.scss'
import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
import Button from '../../components/Button/Button'
import axios from 'axios'
import {changeInput, loadPosts, resetCreate} from '../../store/actions/data'
import Yamde from 'yamde'


const Create = () => {
	const url = window.location.pathname.split('/')
	const token = useSelector(state => state.auth.token)
	const create = useSelector(state => state.data.create)
	const dispatch = useDispatch()


	React.useEffect(() => {
		dispatch(resetCreate())
	}, [dispatch])

	const formSubmit = async (e) => {
		e.preventDefault()

		const formSubmit = {
			title: create.title.value,
			desc: create.desc.value,
			img: create.img.value,
			text: create.text.value,
			date: new Date(),
			rub: url[1]
		}

		await axios.post(`https://warzone-info-default-rtdb.europe-west1.firebasedatabase.app/Posts.json?auth=${token}`, formSubmit)
		dispatch(loadPosts())
		dispatch(resetCreate())
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
							<Textarea key={index} label={e.label} value={e.value} name={e.name}/>
						)
					}
				})}
				<Button style='create' type='submit' button='Отправить'/>
			</form>
		</div>
	)
}

export default Create