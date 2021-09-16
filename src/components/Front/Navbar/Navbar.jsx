//import React from "react";
import styles from './Navbar.module.css';
//import MenuIcon from '@material-ui/icons/Menu';
//import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Box, Container, IconButton, Typography} from "@material-ui/core";
import NavbarMenuItem from "./NavbarMenu/NavbarMenuItem/NavbarMenuItem";
import {PATH_FRONT_LOGIN, PATH_LOGOUT, PATH_PANEL} from "../../../config/urlsConfig";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {AccountBox, AccountCircle} from "@material-ui/icons";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	appBar: {
		background: 'white',
		color: "gray"
	}
}));

const Navbar = (props) => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<AppBar position="static" className={classes.appBar} elevation={3}>
			<Container>
				<Toolbar>
					<div className={styles.navbar__logo}>
						<img src='https://blockwit.io/assets/images/logo.png' alt='BlockWit'/>
					</div>

					<Box display='flex' flexGrow={1}>
						<NavbarMenuItem to={PATH_PANEL} name='panel' auth={true}/>
					</Box>

					<NavbarMenuItem to={PATH_FRONT_LOGIN} name='login' icon={<AccountBox/>} auth={false}/>
					<NavbarMenuItem to={PATH_LOGOUT} name='logout' icon={<ExitToAppIcon/>} auth={true}/>

				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Navbar;