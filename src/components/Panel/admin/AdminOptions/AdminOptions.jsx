import React from "react";
import useFetchAdminOptions from "../../../../hooks/admin/useFetchAdminOptions";
import SingleFetchDataListView from "../../common/SingleFetchDataListView/SingleFetchDataListView";

const AdminOptions = (props) => {

	return <SingleFetchDataListView fetch={useFetchAdminOptions}/>

}

export default AdminOptions;

