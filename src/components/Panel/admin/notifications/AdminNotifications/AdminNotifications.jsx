import React from "react";
import useFetchAdminNotifications from "../../../../../hooks/admin/notifications/useFetchAdminNotifications";
import SingleFetchDataListView from "../../../common/SingleFetchDataListView/SingleFetchDataListView";

const AdminNotifications = (props) => {

	return <SingleFetchDataListView fetch={useFetchAdminNotifications}/>

}

export default AdminNotifications;