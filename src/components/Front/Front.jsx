import React from "react";
import Header from "./Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import Profile from "./Profile/Profile";
import styles from './Front.module.css';
import Login from "./Login/Login";
import {PATH_FRONT_LOGIN, PATH_FRONT_PROFILE} from "../../config/urlsConfig";

const Front = (props) => {

	return (
		<>
			<Header state={props.state.header}/>
			<div className={styles.front__wrapper}>
				<Switch>
					<Route path={PATH_FRONT_LOGIN} component={Login}/>
					<Route path={PATH_FRONT_PROFILE} component={Profile}/>
				</Switch>
			</div>
		</>
	);
}

export default Front;