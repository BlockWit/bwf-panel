import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Front from "./components/Front/Front";
import Panel from "./components/Panel/Panel";
import PrivateRoute from "./components/common/PrivateRoute/PrivateRoute";
import {PATH_FRONT, PATH_LOGOUT, PATH_PANEL, PATH_ROOT} from "./config/urlsConfig";
import Logout from "./components/common/Logout/Logout";
import React from "react";

const App = (props) => {

	let state = props.state;

	return (
		<Switch>
			<Route exact path={PATH_ROOT} component={() => <Redirect to={PATH_FRONT}/>}/>
			<Route exact path={PATH_LOGOUT} component={() => <Logout/>}/>
			<Route path={PATH_FRONT} component={() => <Front state={state.front}/>}/>
			<PrivateRoute path={PATH_PANEL} component={() => <Panel state={{...state.panel, account: state.account}}/>}/>
		</Switch>
	);
}

export default App;
