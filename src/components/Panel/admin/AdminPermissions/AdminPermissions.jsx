import React from "react";
import useFetchAdminPermissions from "../../../../hooks/useFetchAdminPermissions";
import SingleFetchDataListView from "../../common/SingleFetchDataListView/SingleFetchDataListView";


const AdminPermissions = (props) => {

	return <SingleFetchDataListView fetch={useFetchAdminPermissions}/>

}

export default AdminPermissions;