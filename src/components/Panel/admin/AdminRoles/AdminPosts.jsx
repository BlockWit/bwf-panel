import React from "react";
import styles from './AdminPosts.module.css';
import PaginationDataGrid from "../../../common/PaginationDataGrid/PaginationDataGrid";
import useFetchAdminPosts from "../../../../hooks/useFetchAdminPosts";


const AdminPosts = (props) => {

	const prepareItems = (items) => ({
		header: [
			{name: "id", styles: styles.roles__header_col_id},
			{name: "title", styles: styles.roles__header_col_id}
		],
		body: [
			{name: "id", styles: styles.roles__body_col_id},
			{name: "title", styles: styles.roles__header_col_id}
		],
		data: items.map(t => [t.id, t.title])
	});

	return <PaginationDataGrid dataFetcher={useFetchAdminPosts} itemsPerformer={prepareItems}/>;

}

export default AdminPosts;