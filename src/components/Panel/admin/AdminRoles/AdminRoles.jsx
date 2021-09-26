import React from "react";
import useFetchAdminRoles from "../../../../hooks/admin/useFetchAdminRoles";
import SingleFetchDataListView from "../../common/SingleFetchDataListView/SingleFetchDataListView";


const AdminRoles = (props) => {

	return <SingleFetchDataListView fetch={useFetchAdminRoles}/>

}

export default AdminRoles;