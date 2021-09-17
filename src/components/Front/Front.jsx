import React from "react";
import Header from "./Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import Login from "./Login/Login";
import {PATH_FRONT_LOGIN} from "../../config/urlsConfig";
import {Container, createTheme, MuiThemeProvider} from "@material-ui/core";

const frontTheme = createTheme({});

const Front = () => {

	return (
		<MuiThemeProvider theme={frontTheme}>
			<Header/>
			<Container>
				<Switch>
					<Route path={PATH_FRONT_LOGIN} component={Login}/>
				</Switch>
			</Container>
		</MuiThemeProvider>
	);
}

export default Front;