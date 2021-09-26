import React from "react";
import useFetchAdminMedia from "../../../../hooks/admin/useFetchAdminMedia";
import SingleFetchDataListView from "../../common/SingleFetchDataListView/SingleFetchDataListView";


const AdminMedia = (props) => {

	const itemsMapper = (data) =>
		data.items.map((item, index) => ({
			"id": item.id,
			"owner": item.owner.login,
			"mediaType": item.mediaType,
			"path": item.path
		}));

	return <SingleFetchDataListView fetch={useFetchAdminMedia} itemsMapper={itemsMapper}/>


}

export default AdminMedia;