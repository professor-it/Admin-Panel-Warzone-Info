import React from 'react'
import classes from './Layout.module.scss'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Logo from '../../components/Logo/Logo'
import {ChevronRight, ExpandMore, Add} from '@material-ui/icons'

const Layout = (props) => {
	const [navLink, setNavLink] = React.useState(false)
	const navbar = useSelector(state => state.navbar.links)

	return (
		<div className={classes.Layout}>
			<aside>
				<Logo/>
				<nav>
					<div className={classes.menu}>
						<div className={classes.menuTitle} onClick={() => setNavLink(!navLink)}>
							<span>Публикации</span>
							{navLink ? <ExpandMore/> : <ChevronRight/>}
						</div>
						{navLink
							?
								<div className={classes.menuItems}>
									{navbar.nav.map((e, index) => {
										return (
											<div className={classes.menuItem} key={index}>
												<NavLink className={classes.item} to={e.url} activeClassName={classes.active}>
													{e.title}
												</NavLink>
												<NavLink className={classes.itemCreate} to={e.createUrl} exact={e.exact}>
													<Add style={{ fontSize: 22 }}/>
												</NavLink>
											</div>
										)
									})}
								</div>
							: null
						}
					</div>
				</nav>
			</aside>
			<main>
				{props.children}
			</main>
		</div>
	)
}

export default Layout