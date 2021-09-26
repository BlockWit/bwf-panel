import React from "react";
import SingleFetchDataListView from "../../../common/SingleFetchDataListView/SingleFetchDataListView";
import useFetchAdminNotificationsAssigns
	from "../../../../../hooks/admin/notifications/useFetchAdminNotificationsAssigns";

const AdminNotificationsAssigns = (props) => {

	return <SingleFetchDataListView fetch={useFetchAdminNotificationsAssigns}/>

}

export default AdminNotificationsAssigns;