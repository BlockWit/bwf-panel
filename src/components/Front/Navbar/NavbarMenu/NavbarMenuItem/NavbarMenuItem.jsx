import React from "react";
import styles from './NavbarMenuItem.module.css';
import {NavLink} from "react-router-dom";

const NavbarMenuItem = (props) => {
	return (
		<div className={styles.navbar_menu_item}>
			<NavLink to={props.to} activeClassName={styles.activeLink}>{props.name}</NavLink>
		</div>
	);
}

export default NavbarMenuItem;