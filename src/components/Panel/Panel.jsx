import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import styles from './Panel.module.css';
import {Route, Switch} from "react-router-dom";
import Profile from "./Profile/Profile";
import AccountsContainer from "./Accounts/AccountsContainer";
import Options from "./Options/Options";
import {PATH_PANEL_ACCOUNTS, PATH_PANEL_OPTIONS, PATH_PANEL_PROFILE} from "../../config/urlsConfig";

const Panel = (props) => {

	let state = props.state;

	return (
		<div className={styles.panel}>
			<Navbar/>
			<Sidebar/>
			<div className={styles.panel__content}>
				<Switch>
					<Route path={PATH_PANEL_PROFILE} component={() => <Profile state={state.account}/>}/>
					<Route path={PATH_PANEL_ACCOUNTS} component={() => <AccountsContainer state={state.accounts}/>}/>
					<Route path={PATH_PANEL_OPTIONS} component={() => <Options/>}/>
				</Switch>
			</div>
		</div>
	);
}

export default Panel;
