import React from "react";
import {NavLink} from "react-router-dom";
import {Divider, Drawer, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {drawerWidth} from "../Panel";
import {PATH_FRONT} from "../../../config/urlsConfig";
import SidebarMenu from "./SidebarMenu/SidebarMenu";

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		background: "gray"
	},
	drawerPaper: {
		width: drawerWidth,
		background: "#212529",

		//background: "#4f5962",
		color: "#CCCCCC"
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	sidebarLogo: {
		height: '36px',
		margin: "auto"
	},
	brandName: {
		color: "#CCCCCC",
		margin: "auto",
	},
	divider: {
		background: "#565656"
	}
}));

const Sidebar = ({open}) => {
	const classes = useStyles();

	return (
		<Drawer variant="persistent"
						anchor="left"
						open={open}
						PaperProps={{elevation: 10}}
						classes={{
							paper: classes.drawerPaper
						}}
		>
			<div className={classes.toolbar}>
				<NavLink to={PATH_FRONT}>
					<img src='/logo_light.png' alt='BlockWit' className={classes.sidebarLogo}/>
				</NavLink>
				<Typography variant='h6' className={classes.brandName}>BLOCKWIT</Typography>
			</div>
			<Divider className={classes.divider}/>
			<SidebarMenu/>
		</Drawer>
	);
}

export default Sidebar;