import React from "react";
import styles from './Profile.module.css';
import useFetchProfile from "../../../hooks/useFetchProfile";
import usePerformQueryComponent from "../../../hooks/common/usePerformQueryComponent";
import {useRoles} from "../../../hooks/useRoles";
import {Typography} from "@material-ui/core";

const Profile = (props) => {
	const roles = useRoles();
	return usePerformQueryComponent(useFetchProfile, (data) => {
		return (
			<div className={styles.profile}>
				<div className={styles.profile__user_data + ' ' + styles.profile__user_data_id}>ID: {data.id}</div>
				<div className={styles.profile__user_data + ' ' + styles.profile__user_data_login}>Login: {data.login}</div>
				<div className={styles.profile__user_data + ' ' + styles.profile__user_data_email}>Email: {data.email}</div>
				<div>
					<Typography variant="subtitle1">roles</Typography>
					<ul>
						{roles.map((item, index) => {
							return <li key={index}>{item}</li>
						})}
					</ul>
				</div>
			</div>
		);
	})
};

export default Profile;