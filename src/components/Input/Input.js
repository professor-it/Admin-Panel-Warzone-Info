import React from 'react'
import classes from './Input.module.scss'
import {useDispatch} from 'react-redux'
import {changeInput} from '../../store/actions/data'
import {changeAuthInput} from '../../store/actions/auth'

const Input = ({label, value, name, page, type='text'}) => {
	const dispatch = useDispatch()

	const change = (e) => {
		dispatch(changeInput(e.target.name, e.target.value))
	}
	const authChange = (e) => {
		dispatch(changeAuthInput(e.target.name, e.target.value))
	}
	return (
		<label className={classes.Input}>
			{label}:
			<input name={name} type={type} value={value} onChange={page ? authChange : change}/>
		</label>
	)
}

export default Input