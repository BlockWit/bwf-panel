import React from "react";
import Header from "./Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import Login from "./Login/Login";
import {PATH_FRONT_LOGIN, PATH_FRONT_VIEW_POST} from "../../config/urlsConfig";
import {Container, createTheme, MuiThemeProvider} from "@material-ui/core";
import ViewPost from "./ViewPost/ViewPost";

const frontTheme = createTheme({});

const Front = () => {

	return (
		<MuiThemeProvider theme={frontTheme}>
			<Header/>
			<Container>
				<Switch>
					<Route exact path={PATH_FRONT_LOGIN} component={Login}/>
					<Route path={PATH_FRONT_VIEW_POST} component={ViewPost}/>
				</Switch>
			</Container>
		</MuiThemeProvider>
	);
}

export default Front;