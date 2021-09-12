import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import styles from './Panel.module.css';
import {Route, useRouteMatch} from "react-router-dom";
import Profile from "./Profile/Profile";
import AccountsContainer from "./Accounts/AccountsContainer";
import Options from "./Options/Options";

const Panel = (props) => {

	let state = props.state;

	let {path} = useRouteMatch();

	return (
		<div className={styles.panel}>
			<Navbar/>
			<Sidebar/>
			<div className={styles.panel__content}>
				<Route path={`${path}/profile`} render={() => <Profile state={state.account}/>}/>
				<Route path={`${path}/accounts`} render={() => <AccountsContainer state={state.accounts}/>}/>
				<Route path={`${path}/options`} render={() => <Options/>}/>
			</div>
		</div>
	);
}

export default Panel;
