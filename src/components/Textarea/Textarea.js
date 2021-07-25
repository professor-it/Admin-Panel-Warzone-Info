import React from 'react'
import classes from './Textarea.module.scss'
import {changeInput} from '../../store/actions/data'
import {useDispatch} from 'react-redux'

const Textarea = ({label, value, name}) => {
	const dispatch = useDispatch()
	const change = (e) => {
		dispatch(changeInput(e.target.name, e.target.value))
	}
	return (
		<label className={classes.Textarea}>
			{label}:
			<textarea name={name} value={value} onChange={change}/>
		</label>
	)
}

export default Textarea