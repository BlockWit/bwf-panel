import React from "react";
import styles from './AdminMedia.module.css';
import PaginationDataGrid from "../../../common/PaginationDataGrid/PaginationDataGrid";
import useFetchAdminMedia from "../../../../hooks/useFetchAdminMedia";


const AdminMedia = (props) => {

	const prepareItems = (items) => ({
		header: [
			{name: "id", styles: styles.roles__header_col_id},
			{name: "owner", styles: styles.roles__header_col_id},
			{name: "mediaType", styles: styles.roles__header_col_id},
			{name: "path", styles: styles.roles__header_col_id}
		],
		body: [
			{name: "id", styles: styles.roles__body_col_id},
			{name: "owner", styles: styles.roles__body_col_id},
			{name: "mediaType", styles: styles.roles__header_col_id},
			{name: "path", styles: styles.roles__header_col_id}
		],
		data: items.map(t => [t.id, t.owner.login, t.mediaType, t.path])
	});

	return <PaginationDataGrid dataFetcher={useFetchAdminMedia} itemsPerformer={prepareItems}/>;

}

export default AdminMedia;