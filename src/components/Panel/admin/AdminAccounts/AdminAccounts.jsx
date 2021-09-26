import React from "react";
import useFetchAdminAccounts from "../../../../hooks/admin/useFetchAdminAccounts";
import SingleFetchDataListView from "../../common/SingleFetchDataListView/SingleFetchDataListView";

const AdminAccounts = (props) => {

	return <SingleFetchDataListView fetch={useFetchAdminAccounts}/>

}

export default AdminAccounts;