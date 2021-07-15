import React from 'react'
import classes from './Logo.module.scss'
import logo from '../../assets/img/logo.png'

const Logo = () => {
	return (
		<div className={classes.Logo}>
			<img src={logo} alt="logo"/>
		</div>
	)
}

export default Logo