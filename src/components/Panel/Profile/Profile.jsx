import React from "react";
import styles from './Profile.module.css';
import useFetchProfile from "../../../hooks/useFetchProfile";
import usePerformQueryComponent from "../../../hooks/common/usePerformQueryComponent";

const Profile = (props) => usePerformQueryComponent(useFetchProfile, (data) => {

	return (
		<div className={styles.profile}>
			<div className={styles.profile__user_data + ' ' + styles.profile__user_data_id}>{data.id}</div>
			<div className={styles.profile__user_data + ' ' + styles.profile__user_data_login}>{data.login}</div>
			<div className={styles.profile__user_data + ' ' + styles.profile__user_data_email}>{data.email}</div>
		</div>
	);

});

export default Profile;