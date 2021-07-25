import React from 'react'
import classes from './Auth.module.scss'
import Input from '../../components/Input/Input'
import {useDispatch, useSelector} from 'react-redux'
import Button from '../../components/Button/Button'
import {auth} from '../../store/actions/auth'
import {Redirect} from 'react-router-dom'

const Auth = () => {
	const authData = useSelector(state => state.auth.auth)
	const token = useSelector(state => state.auth.token)
	const error = useSelector(state => state.auth.error)
	const dispatch = useDispatch()

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
						<Input key={index} label={e.label} value={e.value} name={e.name} page='auth' type={e.type}/>
					)
				})}
				<Button style='create' button='Войти'/>
				{!error
					? null
					: <div className={classes.Error}>
						Неправильно введен логин или пароль. <br/> Попторите попытку!
					</div>
				}
			</form>
		</div>
	)
}

export default Auth