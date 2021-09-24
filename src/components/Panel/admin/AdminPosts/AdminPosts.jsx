import React from "react";
import SingleFetchDataListView from "../../common/SingleFetchDataListView/SingleFetchDataListView";
import useFetchAdminPosts from "../../../../hooks/useFetchAdminPosts";
import stdDate from "../../../../utils/stdDate";
import PostStatus from "../../common/posts/PostStatus/PostStatus";
import PostType from "../../common/posts/PostType/PostType";

const AdminPosts = (props) => {

	const itemsMapper = (data) =>
		data.items.map((item, index) => ({
			"id": item.id,
			"owner": item.owner.login,
			"title": item.title,
			"postStatus": item.postStatus,
			"created": item.created,
			"postType": item.postType
		}));

	const options = {
		custom: {
			id: {
				styles: {
					width: "10px"
				}
			},
			title: {
				trim: 10
			},
			postStatus: {
				title: "status",
				customWrapper: (value) => <PostStatus value={value}/>
			},
			postType: {
				title: "type",
				customWrapper: (value) => <PostType value={value}/>
			},
			created: {
				customWrapper: stdDate
			}
		}
	}

	return <SingleFetchDataListView fetch={useFetchAdminPosts} itemsMapper={itemsMapper} options={options}/>

}

export default AdminPosts;