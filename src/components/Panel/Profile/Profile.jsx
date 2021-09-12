import React from "react";
import styles from './Profile.module.css';
import Box from "../common/Box/Box";

const Profile = (props) => {
	let state = props.state;
	return (
		<Box>
			<div className={styles.profile}>
				<div className={styles.profile__user_data + ' ' + styles.profile__user_data_login}>{state.login}</div>
				<div className={styles.profile__user_data + ' ' + styles.profile__user_data_email}>{state.email}</div>
			</div>
		</Box>
	);
}

export default Profile;