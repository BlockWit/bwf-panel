import React from "react";
import styles from './Navbar.module.css';
import NavbarMenu from "./NavbarMenu/NavbarMenu";

const Navbar = (props) => {

	return (
		<div className={styles.navbar}>
			<div className={styles.navbar__container}>
				<div className={styles.navbar__logo}>
					<img src='https://blockwit.io/assets/images/logo.png' alt='BlockWit'/>
				</div>
				<NavbarMenu state={props.state.menu}/>
				<div className={styles.navbar__profile_info}>{props.name}, {props.age}</div>
			</div>
		</div>
	);
}

export default Navbar;