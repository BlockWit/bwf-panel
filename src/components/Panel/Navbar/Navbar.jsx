import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/core/styles";
import {drawerWidth} from "../Panel";
import {IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import clsx from "clsx";
import NavbarMenu from "./NavbarMenu/NavbarMenu";

const useStyles = makeStyles((theme) => ({
	appBar: {
		background: 'white',
		color: "gray",
		zIndex: theme.zIndex.drawer + 1
	},
	appBarOpen: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`
	},
	appBarClose: {}
}));


const Navbar = ({handleToggleOpen, open}) => {
	const classes = useStyles();

	return (
		<AppBar position="fixed" elevation={3}
						className={clsx(classes.appBar, {[classes.appBarOpen]: open, [classes.appBarClose]: !open})}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleToggleOpen}
					edge="start">
					<MenuIcon/>
				</IconButton>
				<NavbarMenu/>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;