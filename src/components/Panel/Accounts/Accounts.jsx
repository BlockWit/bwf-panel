import React from "react";
import styles from './Accounts.module.css';
import DataGrid from "../common/DataGrid/DataGrid";
import useFetchAccounts from "../../../hooks/useFetchAccounts";
import usePerformQueryComponent from "../../../hooks/common/usePerformQueryComponent";

const Accounts = (props) => usePerformQueryComponent(useFetchAccounts, (data) => {

	let preparedProps = {
		header: [
			{name: "id", styles: styles.accounts__header_col_id},
			{name: "login", styles: styles.accounts__header_col_login},
			{name: "email", styles: styles.accounts__header_col_email}
		],
		body: [
			{name: "id", styles: styles.accounts__body_col_id},
			{name: "login", styles: styles.accounts__body_col_login},
			{name: "email", styles: styles.accounts__header_col_email}
		],
		data: data.map(t => [t.id, t.login, t.email])
	}

	return (
		<DataGrid state={preparedProps}/>
	);

})

export default Accounts;

