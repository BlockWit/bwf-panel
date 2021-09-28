import React from "react";
import NavbarMenuItem from "./NavbarMenuItem/NavbarMenuItem";
import {Box} from "@material-ui/core";
import {PATH_FRONT_LOGIN, PATH_LOGOUT, PATH_PANEL} from "../../../../config/urlsConfig";
import {AccountBox} from "@material-ui/icons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NavbarCustomMenuItems from "./NavbarCustomMenuItems/NavbarCustomMenuItems";

const NavbarMenu = () => {
	return (
		<>
			<Box display='flex' flexGrow={1}>
				<NavbarMenuItem to={PATH_PANEL} name='panel' auth={true}/>
				<NavbarCustomMenuItems/>
			</Box>
			<NavbarMenuItem to={PATH_FRONT_LOGIN} name='login' icon={<AccountBox/>} auth={false}/>
			<NavbarMenuItem to={PATH_LOGOUT} name='logout' icon={<ExitToAppIcon/>} auth={true}/>
		</>
	);
}

export default NavbarMenu;