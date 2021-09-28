import React from "react";
import Header from "./Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import Login from "./Login/Login";
import {PATH_FRONT_LOGIN, PATH_FRONT_VIEW_POST, PATH_ROOT} from "../../config/urlsConfig";
import {Container, createTheme, makeStyles, MuiThemeProvider} from "@material-ui/core";
import ViewPost from "./ViewPost/ViewPost";
import ViewHomePage from "./ViewHomePage/ViewHomePage";

const frontTheme = createTheme({});

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: "100px"
	},
}));

const Front = () => {
	const classes = useStyles();

	return (
		<MuiThemeProvider theme={frontTheme}>
			<Header/>
			<Container className={classes.container}>
				<Switch>
					<Route exact path={PATH_ROOT} component={ViewHomePage}/>
					<Route exact path={PATH_FRONT_LOGIN} component={Login}/>
					<Route path={PATH_FRONT_VIEW_POST} component={ViewPost}/>
				</Switch>
			</Container>
		</MuiThemeProvider>
	);

}

export default Front;