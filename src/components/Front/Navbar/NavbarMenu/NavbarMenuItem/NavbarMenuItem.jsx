import React from "react";
import styles from './NavbarMenuItem.module.css';
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {IconButton, Typography} from "@material-ui/core";
import {useIsAuthenticated} from "../../../../../utils/auth/auth";
import {AccountCircle} from "@material-ui/icons";

const NavbarMenuItem = ({auth = null, to, name, icon}) => {

	const authenticated = useIsAuthenticated();
	const history = useHistory();
	const location = useLocation();

	console.log(name, authenticated);

	if ((auth === true && !authenticated) || (auth === false && authenticated))
		return <></>

	return (
		<IconButton color="inherit" className={} onClick={() => history.push(to)}>
			{icon}
			{name && <Typography variant='h6'>{name}</Typography>}
		</IconButton>

		//
		// <div className={styles.navbar_menu_item}>
		// 	<NavLink to={to} activeClassName={styles.activeLink} className={styles.navbar_menu_item}>
		// 		<div className={styles.navbar_menu_item__content}>
		// 			<div className={styles.navbar_menu_item__content_icon}>{icon}</div>
		// 			{name &&
		// 			<div className={styles.navbar_menu_item__content_text}>
		// 				<Typography className={styles.navbar_menu_item__text} variant="subtitle1">{name}</Typography>
		// 			</div>
		// 			}
		// 		</div>
		// 	</NavLink>
		// </div>
	);

}
export default NavbarMenuItem;