import React from "react";
import SingleFetchDataListView from "../../../common/SingleFetchDataListView/SingleFetchDataListView";
import useFetchAdminNotificationsExecStates
	from "../../../../../hooks/admin/notifications/useFetchAdminNotificationsExecTypes";

const AdminNotificationsExecStates = (props) => {

	return <SingleFetchDataListView fetch={useFetchAdminNotificationsExecStates}/>

}

export default AdminNotificationsExecStates;