import React from 'react'
import classes from './Button.module.scss'

import {Create, Delete, ArrowForwardIos} from '@material-ui/icons'

const Button = ({style = 'create', button='Отправить', onPress}, props) => {
	if (style === 'create') {
		return (
			<button type={props.type} className={`${classes.Button} ${classes.Create}`}>
				{button}
				<span className={classes.Submit}>
					<ArrowForwardIos/>
				</span>
			</button>
		)
	} else if (style === 'change') {
		return (
			<button className={`${classes.Button} ${classes.Change}`} onClick={onPress}>
				<span className={classes.Other}>
					<Create/>
				</span>
				Изменить
			</button>
		)
	} else if (style === 'del') {
		return (
			<button className={`${classes.Button} ${classes.Del}`} onClick={onPress}>
				<span className={classes.Other}>
					<Delete/>
				</span>
				Удалить
			</button>
		)
	}
}

export default Button