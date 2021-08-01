import React from 'react'
import classes from './Auth.module.scss'
import Input from '../../components/Input/Input'
import {useDispatch, useSelector} from 'react-redux'
import Button from '../../components/Button/Button'
import {auth, changeAuthInput} from '../../store/actions/auth'
import {Redirect} from 'react-router-dom'

import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

const Auth = () => {
	const authData = useSelector(state => state.auth.auth)
	const token = useSelector(state => state.auth.token)
	const error = useSelector(state => state.auth.error)
	const dispatch = useDispatch()

	const authChange = (e) => {
		dispatch(changeAuthInput(e.target.name, e.target.value))
	}

	const authSubmit = (e) => {
		e.preventDefault()
		dispatch(auth(authData.email.value, authData.password.value))
	}

	if (token) {
		return <Redirect to='/'/>
	}

	return (
		<div className={classes.Auth}>
			<form onSubmit={authSubmit}>
				{Object.values(authData).map((e, index) => {
					return (
						<div key={index} className={classes.inputBox}>
							<span>{e.name === 'email' ? <PersonIcon fontSize='small'/> : <LockIcon fontSize='small'/>}</span>
							<input name={e.name} type={e.type} value={e.value} onChange={authChange} placeholder={e.name}/>
						</div>
					)
				})}
				<Button style='create' button='Авторизация'/>
				{!error
					? null
					: <div className={classes.Error}>
						Неправильно введен логин или пароль. <br/> Повторите попытку!
					</div>
				}
			</form>
		</div>
	)
}

export default Auth