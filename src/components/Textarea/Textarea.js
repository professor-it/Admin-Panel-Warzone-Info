import React from 'react'
import classes from './Textarea.module.scss'
import Yamde from 'yamde'
import {useDispatch} from 'react-redux'
import {changeInput} from '../../store/actions/data'

const Textarea = ({label, value, name}) => {

	const dispatch = useDispatch()

	const change = e => {
		dispatch(changeInput('text', e))
	}

	return (
		<label className={classes.Textarea}>
			{label}:
			<Yamde value={value} handler={change} theme="dark" />
		</label>
	)
}

export default Textarea