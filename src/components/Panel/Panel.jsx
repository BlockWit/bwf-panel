import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import {Redirect, Route, Switch} from "react-router-dom";
import Profile from "./Profile/Profile";
import Options from "./Options/Options";
import {PATH_PANEL, PATH_PANEL_OPTIONS, PATH_PANEL_PROFILE} from "../../config/urlsConfig";
import {createTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Box from "./common/Box/Box";

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

	let state = props.state;

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
						<Route path={PATH_PANEL_PROFILE} component={() => <Profile state={state.account}/>}/>
						<Route path={PATH_PANEL_OPTIONS} component={() => <Options/>}/>
					</Switch>
				</Box>
			</div>
		</MuiThemeProvider>
	);
}

export default Panel;
