import React from "react";
import styles from './AdminPermissions.module.css';
import PaginationDataGrid from "../../../common/PaginationDataGrid/PaginationDataGrid";
import useFetchAdminPermissions from "../../../../hooks/useFetchAdminPermissions";


const AdminPermissions = (props) => {

	const prepareItems = (items) => ({
		header: [
			{name: "id", styles: styles.permissions__header_col_id},
			{name: "name", styles: styles.permissions__header_col_name}
		],
		body: [
			{name: "id", styles: styles.permissions__body_col_id},
			{name: "name", styles: styles.permissions__body_col_name}
		],
		data: items.map(t => [t.id, t.name])
	});

	return <PaginationDataGrid dataFetcher={useFetchAdminPermissions} itemsPerformer={prepareItems}/>;

}

export default AdminPermissions;