import React from "react";
import Header from "./Navbar/Navbar";
import {Route, useRouteMatch} from "react-router-dom";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import styles from './Front.module.css';

const Front = (props) => {

	let {path} = useRouteMatch();

	return (
		<>
			<Header state={props.state.header}/>
			<div className={styles.front__wrapper}>
				<Route path={`${path}/profile`} component={Profile}/>
				<Route path={`${path}/dialogs`} component={Dialogs}/>
			</div>
		</>
	);
}

export default Front;