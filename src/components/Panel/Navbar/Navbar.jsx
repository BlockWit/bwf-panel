import React from "react";
import styles from './Navbar.module.css';
import {NavLink, useRouteMatch} from "react-router-dom";

const Navbar = (props) => {

	let {url} = useRouteMatch();

	return (
		<div className={styles.navbar}>
			<div className={styles.navbar__menu}>
				<div className={styles.navbar__menu_item}>
					<NavLink to={`${url}/profile`} activeClassName={styles.activeLink}>Profile</NavLink>
				</div>
				<div className={styles.navbar__menu_item}>
					<NavLink to={`${url}/dialogs`} activeClassName={styles.activeLink}>Messages</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Navbar;