import React from "react";
import useFetchAdminNotifications from "../../../../../hooks/useFetchAdminNotifications";
import SingleFetchDataListView from "../../../common/SingleFetchDataListView/SingleFetchDataListView";

const AdminNotifications = (props) => {

	return <SingleFetchDataListView fetch={useFetchAdminNotifications}/>

}

export default AdminNotifications;