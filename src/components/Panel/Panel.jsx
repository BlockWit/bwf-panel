import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import {Redirect, Route, Switch} from "react-router-dom";
import Profile from "./Profile/Profile";
import AdminOptions from "./admin/AdminOptions/AdminOptions";
import {
	PATH_PANEL,
	PATH_PANEL_ADMIN_ACCOUNTS,
	PATH_PANEL_ADMIN_OPTIONS,
	PATH_PANEL_ADMIN_PERMISSIONS,
	PATH_PANEL_ADMIN_ROLES,
	PATH_PANEL_PROFILE
} from "../../config/urlsConfig";
import {createTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Box from "./common/Box/Box";
import AdminAccounts from "./admin/AdminAccounts/AdminAccounts";
import AdminRoles from "./admin/AdminRoles/AdminRoles";
import AdminPermissions from "./admin/AdminPermissions/AdminPermissions";
import RoleProtected from "../common/RoleProtected/RoleProtected";
import {ROLES_ADMIN} from "../../utils/roles";

const panelTheme = createTheme({});

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
						<Route path={PATH_PANEL_PROFILE} component={() => <Profile/>}/>
						<RoleProtected role={ROLES_ADMIN}>
							<Route path={PATH_PANEL_ADMIN_ACCOUNTS} component={() => <AdminAccounts/>}/>
							<Route path={PATH_PANEL_ADMIN_ROLES} component={() => <AdminRoles/>}/>
							<Route path={PATH_PANEL_ADMIN_PERMISSIONS} component={() => <AdminPermissions/>}/>
							<Route path={PATH_PANEL_ADMIN_OPTIONS} component={() => <AdminOptions/>}/>
						</RoleProtected>
					</Switch>
				</Box>
			</div>
		</MuiThemeProvider>
	);
}

export default Panel;
