import React from "react";
import styles from './Sidebar.module.css';
import {NavLink, useRouteMatch} from "react-router-dom";

const Sidebar = () => {

	let {url} = useRouteMatch();

	return (
		<div className={styles.sidebar}>

			<div className={styles.sidebar__header + ' ' + styles.mod_bottom_line}>
				<div className={styles.sidebar__header_logo}>
					<img src='https://blockwit.io/assets/images/sidebar_logo.png' alt='BlockWit'/>
				</div>
				<div className={styles.sidebar__header_text}>
					BlockWit
				</div>
			</div>

			<div className={styles.sidebar__menu}>
				<div className={styles.sidebar__menu_block}>
					<div className={styles.sidebar__menu_block_content + ' ' + styles.mod_bottom_line}>
						<div className={styles.sidebar__menu_block_content_menu_item}>
							<NavLink to={`${url}/profile`} activeClassName={styles.activeLink}>Profile</NavLink>
						</div>
					</div>
					<div className={styles.sidebar__menu_block_content + ' ' + styles.mod_bottom_line}>
						<div className={styles.sidebar__menu_block_content_menu_item}>
							<NavLink to={`${url}/accounts`} activeClassName={styles.activeLink}>Accounts</NavLink>
						</div>
						<div className={styles.sidebar__menu_block_content_menu_item}>
							<NavLink to={`${url}/options`} activeClassName={styles.activeLink}>Options</NavLink>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}

export default Sidebar;