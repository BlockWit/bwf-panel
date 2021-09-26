import React from "react";
import SingleFetchDataListView from "../../../common/SingleFetchDataListView/SingleFetchDataListView";
import useFetchAdminNotificationsTypes from "../../../../../hooks/admin/notifications/useFetchAdminNotificationsTypes";

const AdminNotificationsTypes = (props) => {

	return <SingleFetchDataListView fetch={useFetchAdminNotificationsTypes}/>

}

export default AdminNotificationsTypes;