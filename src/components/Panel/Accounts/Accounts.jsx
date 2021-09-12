import React from "react";
import styles from './Accounts.module.css';
import axios from "axios";
import DataGrid from "../common/DataGrid/DataGrid";
import Box from "../common/Box/Box";
import axiosConfig from "../../../axiosConfig";

const Accounts = (props) => {

	let items = props.accounts;
	if (items.length === 0) {
		axios.get(axiosConfig.baseUrl + '/accounts', {
			auth: {
				username: axiosConfig.uname,
				password: axiosConfig.pass
			}
		}).then(function (response) {
			props.addAccounts(response.data);
		}).catch(function (error) {
			console.log('Error: ', error);
		});
	}

	let preparedProps = {
		header: [
			{name: "id", styles: styles.accounts__header_col_id},
			{name: "login", styles: styles.accounts__header_col_name},
			{name: "email", styles: styles.accounts__header_col_value},
		],
		body: [
			{name: "id", styles: styles.accounts__body_col_id},
			{name: "login", styles: styles.accounts__body_col_name},
			{name: "email", styles: styles.accounts__body_col_value},
		],
		data: items.map(t => [t.id, t.login, t.email])
	}

	return (
		<Box>
			<DataGrid state={preparedProps}/>
		</Box>
	);

}

export default Accounts;

