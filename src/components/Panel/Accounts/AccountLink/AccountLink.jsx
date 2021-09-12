import React from "react";
import styles from './AccountLink.module.css';
import {NavLink, useRouteMatch} from "react-router-dom";

const AccountLink = (props) => {

	let {url} = useRouteMatch();

	const onClick = (e) => {
		console.log(e);
	};

	return (
		<div className={styles.account_link}>
			<NavLink
				to={`${url}/${props.accountId}`}
				activeClassName={styles.activeLink}
				onClick={onClick}>
				{props.accountLogin}
			</NavLink>
		</div>
	);
}

export default AccountLink;