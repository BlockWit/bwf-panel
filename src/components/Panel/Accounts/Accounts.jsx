import React from "react";
import styles from './Accounts.module.css';
import useFetchAccounts from "../../../hooks/useFetchAccounts";
import PaginationDataGrid from "../../common/PaginationDataGrid/PaginationDataGrid";

const Accounts = (props) => {

	const prepareItems = (items) => ({
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
		data: items.map(t => [t.id, t.login, t.email])
	});

	return <PaginationDataGrid dataFetcher={useFetchAccounts} itemsPerformer={prepareItems}/>;

}

export default Accounts;