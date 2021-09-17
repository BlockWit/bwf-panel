import React from "react";
import styles from './Profile.module.css';

const Profile = (props) => {
	let state = props.state;
	return (
		<div className={styles.profile}>
			<div className={styles.profile__user_data + ' ' + styles.profile__user_data_login}>{state.login}</div>
			<div className={styles.profile__user_data + ' ' + styles.profile__user_data_email}>{state.email}</div>
		</div>
	);
}

export default Profile;