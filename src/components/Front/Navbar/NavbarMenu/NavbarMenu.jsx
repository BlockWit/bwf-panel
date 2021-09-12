import React from "react";
import styles from './NavbarMenu.module.css';
import NavbarMenuItem from "./NavbarMenuItem/NavbarMenuItem";

const NavbarMenu = (props) => {
	return (
		<div className={styles.navbar_menu}>
			<NavbarMenuItem to={`/panel`} name='panel'/>
			{props.state.map(menuItem => <NavbarMenuItem key={menuItem.id} to={"/front/page/" + menuItem.id} name={menuItem.name}/>)}
		</div>
	);

}

export default NavbarMenu;