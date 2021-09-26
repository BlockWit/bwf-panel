import React from "react";
import SingleFetchDataListView from "../../../common/SingleFetchDataListView/SingleFetchDataListView";
import useFetchAdminNotificationsExecutors
	from "../../../../../hooks/admin/notifications/useFetchAdminNotificationsExecutors";

const AdminNotificationsExecutors = (props) => {

	return <SingleFetchDataListView fetch={useFetchAdminNotificationsExecutors}/>

}

export default AdminNotificationsExecutors;