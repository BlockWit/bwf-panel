import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import {Redirect, Route, Switch} from "react-router-dom";
import Profile from "./Profile/Profile";
import AdminOptions from "./admin/AdminOptions/AdminOptions";
import {
	PATH_PANEL,
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
} from "../../config/urlsConfig";
import {createTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Box from "./common/Box/Box";
import AdminAccounts from "./admin/AdminAccounts/AdminAccounts";
import AdminPosts from "./admin/AdminPosts/AdminPosts";
import AdminPermissions from "./admin/AdminPermissions/AdminPermissions";
import RoleProtected from "../common/RoleProtected/RoleProtected";
import {ROLES_ADMIN} from "../../utils/roles";
import AdminMedia from "./admin/AdminMedia/AdminMedia";
import AdminRoles from "./admin/AdminRoles/AdminRoles";
import AdminNotifications from "./admin/notifications/AdminNotifications/AdminNotifications";
import AdminNotificationsAssigns from "./admin/notifications/AdminNotificationsAssigns/AdminNotificationsAssigns";
import AdminNotificationsExecutors from "./admin/notifications/AdminNotificationsExecutors/AdminNotificationsExecutors";
import AdminNotificationsTypes from "./admin/notifications/AdminNotificationsTypes/AdminNotificationsTypes";
import AdminNotificationsExecStates
	from "./admin/notifications/AdminNotificationsExecStates/AdminNotificationsExecStates";

const panelTheme = createTheme({
	palette: {
		success: {
			main: "#bac778",
		},
	},
});

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	panelContent: {
		flexGrow: 1,
	},
	panelContentSidebarOpen: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
	},
	panelContentSidebarClose: {
		width: "100%",
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	}
}));


const Panel = (props) => {
	const classes = useStyles();

	const [open, setOpen] = React.useState(true);

	const handleToggleOpen = () => setOpen(!open);

	return (
		<MuiThemeProvider theme={panelTheme}>
			<CssBaseline/>
			<Navbar handleToggleOpen={handleToggleOpen} open={open}/>
			<Sidebar open={open}/>
			<div
				className={classes.panelContent + ' ' + (open ? classes.panelContentSidebarOpen : classes.panelContentSidebarClose)}>
				<div className={classes.drawerHeader}></div>
				<Box>
					<Switch>
						<Route exact path={PATH_PANEL} component={() => <Redirect to={PATH_PANEL_PROFILE}/>}/>
						<Route exact path={PATH_PANEL_PROFILE} component={() => <Profile/>}/>
						<RoleProtected role={ROLES_ADMIN}>
							<Route exact path={PATH_PANEL_ADMIN_MEDIA} component={() => <AdminMedia/>}/>
							<Route exact path={PATH_PANEL_ADMIN_POSTS} component={() => <AdminPosts/>}/>

							<Route exact path={PATH_PANEL_ADMIN_ACCOUNTS} component={() => <AdminAccounts/>}/>
							<Route exact path={PATH_PANEL_ADMIN_ROLES} component={() => <AdminRoles/>}/>
							<Route exact path={PATH_PANEL_ADMIN_PERMISSIONS} component={() => <AdminPermissions/>}/>
							<Route exact path={PATH_PANEL_ADMIN_OPTIONS} component={() => <AdminOptions/>}/>

							<Route exact path={PATH_PANEL_ADMIN_NOTIFICATIONS} component={() => <AdminNotifications/>}/>
							<Route exact path={PATH_PANEL_ADMIN_NOTIFICATIONS_ASSIGNS}
										 component={() => <AdminNotificationsAssigns/>}/>
							<Route exact path={PATH_PANEL_ADMIN_NOTIFICATIONS_EXECUTORS}
										 component={() => <AdminNotificationsExecutors/>}/>
							<Route exact path={PATH_PANEL_ADMIN_NOTIFICATIONS_TYPES} component={() => <AdminNotificationsTypes/>}/>
							<Route exact path={PATH_PANEL_ADMIN_NOTIFICATIONS_EXEC_STATES}
										 component={() => <AdminNotificationsExecStates/>}/>
						</RoleProtected>
					</Switch>
				</Box>
			</div>
		</MuiThemeProvider>
	);
}

export default Panel;
