import React from "react";
import styles from './AdminRoles.module.css';
import PaginationDataGrid from "../../../common/PaginationDataGrid/PaginationDataGrid";
import useFetchAdminRoles from "../../../../hooks/useFetchAdminRoles";


const AdminRoles = (props) => {

	const prepareItems = (items) => ({
		header: [
			{name: "id", styles: styles.roles__header_col_id},
			{name: "name", styles: styles.roles__header_col_name}
		],
		body: [
			{name: "id", styles: styles.roles__body_col_id},
			{name: "name", styles: styles.roles__body_col_name}
		],
		data: items.map(t => [t.id, t.name])
	});

	return <PaginationDataGrid dataFetcher={useFetchAdminRoles} itemsPerformer={prepareItems}/>;

}

export default AdminRoles;