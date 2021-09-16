import React from "react";
import Header from "./Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import Profile from "./Profile/Profile";
import Login from "./Login/Login";
import {PATH_FRONT_LOGIN, PATH_FRONT_PROFILE} from "../../config/urlsConfig";
import {Container, createTheme, MuiThemeProvider} from "@material-ui/core";

const frontTheme = createTheme({
	// palette: {
	// 	primary: {
	// 		main: '#FFFFFF',
	// 	},
	// },
});

const Front = (props) => {

	return (
		<MuiThemeProvider theme={frontTheme}>
			<Header state={props.state.header}/>
			<Container>
				<Switch>
					<Route path={PATH_FRONT_LOGIN} component={Login}/>
					<Route path={PATH_FRONT_PROFILE} component={Profile}/>
				</Switch>
			</Container>
		</MuiThemeProvider>
	);
}

export default Front;