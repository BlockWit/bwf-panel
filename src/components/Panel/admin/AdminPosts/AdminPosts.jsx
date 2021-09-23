import React from "react";
import useFetchAdminPosts from "../../../../hooks/useFetchAdminPosts";
import usePerformPageableQueryComponent from "../../../../hooks/common/usePerformPageableQueryComponent";
import DataListView from "../../common/DataListView/DataListView";

const AdminPosts = (props) => {
	return usePerformPageableQueryComponent(useFetchAdminPosts, ({
																																 data,
																																 setPageNumber,
																																 setPageSize
																															 }) => {

		const {pagesCount, pageSize, page} = data;

		const items = data.items.map((item, index) => ({
			"id": item.id,
			"owner": item.owner.login,
			"title": item.title,
			"postStatus": item.postStatus,
			"created": item.created,
			"postType": item.postType
		}));

		return <DataListView items={items}
												 pagesCount={pagesCount}
												 pagesSize={pageSize}
												 page={page}
												 setPageNumber={setPageNumber}
												 setPageSize={setPageSize}/>
	});
}

export default AdminPosts;