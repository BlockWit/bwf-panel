import React from "react";
import {NavLink} from "react-router-dom";
import {Divider, Drawer, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {drawerWidth} from "../Panel";
import {
	PATH_FRONT,
	PATH_PANEL_ADMIN_ACCOUNTS,
	PATH_PANEL_ADMIN_MEDIA,
	PATH_PANEL_ADMIN_NOTIFICATIONS,
	PATH_PANEL_ADMIN_NOTIFICATIONS_ASSIGNS,
	PATH_PANEL_ADMIN_NOTIFICATIONS_EXEC_STATES,
	PATH_PANEL_ADMIN_NOTIFICATIONS_EXECUTORS,
	PATH_PANEL_ADMIN_NOTIFICATIONS_TYPES,
	PATH_PANEL_ADMIN_OPTIONS,
	PATH_PANEL_ADMIN_PERMISSIONS,
	PATH_PANEL_ADMIN_POSTS,
	PATH_PANEL_ADMIN_ROLES,
	PATH_PANEL_PROFILE
} from "../../../config/urlsConfig";
import SidebarMenu, {MT_DIVIDER, MT_EXPANDABLE_ITEM, MT_ITEM} from "./SidebarMenu/SidebarMenu";
import {
	AccountCircle,
	Description,
	Lock,
	NotificationsActive,
	PeopleAlt,
	PermMedia,
	Settings,
	VpnKey
} from "@material-ui/icons";
import {useRoles} from "../../../hooks/useRoles";
import {ROLES_ADMIN} from "../../../utils/roles";

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		background: "gray"
	},
	drawerPaper: {
		width: drawerWidth,
		//background: "#212529",
		background: "linear-gradient(to top, #0c606d, #00032d)",

		//background: "#4f5962",
		color: "#AAAAAA"
	},
	iconColor: {
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
	const roles = useRoles();

	const menu = [
		{
			"type": MT_ITEM,
			"icon": <AccountCircle className={classes.iconColor}/>,
			"name": "profile",
			"link": PATH_PANEL_PROFILE
		},
		// {
		// 	"type": MT_ITEM,
		// 	"icon": <AccountCircle className={classes.iconColor}/>,
		// 	"name": "posts",
		// 	"link": PATH_PANEL_PROFILE
		// },
	]

	if (roles.includes(ROLES_ADMIN)) {
		menu.push({"type": MT_DIVIDER});
		menu.push(
			{
				"type": MT_EXPANDABLE_ITEM,
				"name": "content",
				"children": [
					{
						"type": MT_ITEM,
						"icon": <Description className={classes.iconColor}/>,
						"name": "posts",
						"link": PATH_PANEL_ADMIN_POSTS
					},
					{
						"type": MT_ITEM,
						"icon": <PermMedia className={classes.iconColor}/>,
						"name": "media",
						"link": PATH_PANEL_ADMIN_MEDIA
					}
				]
			}
		);
		menu.push({"type": MT_DIVIDER});
		menu.push(
			{
				"type": MT_EXPANDABLE_ITEM,
				"name": "administration",
				"children": [
					{
						"type": MT_ITEM,
						"icon": <PeopleAlt className={classes.iconColor}/>,
						"name": "accounts",
						"link": PATH_PANEL_ADMIN_ACCOUNTS
					},
					{
						"type": MT_ITEM,
						"icon": <Lock className={classes.iconColor}/>,
						"name": "roles",
						"link": PATH_PANEL_ADMIN_ROLES
					},
					{
						"type": MT_ITEM,
						"icon": <VpnKey className={classes.iconColor}/>,
						"name": "permissions",
						"link": PATH_PANEL_ADMIN_PERMISSIONS
					},
					{
						"type": MT_ITEM,
						"icon": <Settings className={classes.iconColor}/>,
						"name": "options",
						"link": PATH_PANEL_ADMIN_OPTIONS
					}
				]
			}
		);
		menu.push({"type": MT_DIVIDER});

		menu.push(
			{
				"type": MT_EXPANDABLE_ITEM,
				"name": "notifications",
				"children": [
					{
						"type": MT_ITEM,
						"icon": <NotificationsActive className={classes.iconColor}/>,
						"name": "notifications",
						"link": PATH_PANEL_ADMIN_NOTIFICATIONS
					},
					{
						"type": MT_ITEM,
						"icon": <NotificationsActive className={classes.iconColor}/>,
						"name": "notification exec states",
						"link": PATH_PANEL_ADMIN_NOTIFICATIONS_EXEC_STATES
					},
					{
						"type": MT_ITEM,
						"icon": <NotificationsActive className={classes.iconColor}/>,
						"name": "notification types",
						"link": PATH_PANEL_ADMIN_NOTIFICATIONS_TYPES
					},
					{
						"type": MT_ITEM,
						"icon": <NotificationsActive className={classes.iconColor}/>,
						"name": "executors",
						"link": PATH_PANEL_ADMIN_NOTIFICATIONS_EXECUTORS
					},
					{
						"type": MT_ITEM,
						"icon": <NotificationsActive className={classes.iconColor}/>,
						"name": "assigns",
						"link": PATH_PANEL_ADMIN_NOTIFICATIONS_ASSIGNS
					}
				]
			}
		);
	}


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
			<SidebarMenu menu={menu}/>
		</Drawer>
	);
}

export default Sidebar;