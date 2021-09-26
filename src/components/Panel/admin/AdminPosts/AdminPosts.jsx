import React from "react";
import SingleFetchDataListView from "../../common/SingleFetchDataListView/SingleFetchDataListView";
import useFetchAdminPosts from "../../../../hooks/admin/useFetchAdminPosts";
import stdDate from "../../../../utils/stdDate";
import PostStatus from "../../common/posts/PostStatus/PostStatus";
import PostType from "../../common/posts/PostType/PostType";
import {useHistory} from "react-router-dom";
import {PATH_FRONT_VIEW_POST_} from "../../../../config/urlsConfig";

const AdminPosts = (props) => {

	const history = useHistory();

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
					width: "10px",
					justifyContent: "flex-end"
				}
			},
			owner: {
				styles: {
					width: "10%"
				}
			},
			title: {
				trim: 100,
				styles: {
					width: "50%"
				},
				actions: {
					onClick: item => history.push(PATH_FRONT_VIEW_POST_ + item.id)
				}
			},
			postStatus: {
				title: "status",
				styles: {
					width: "10%",
					justifyContent: "center"
				},
				customWrapper: (value) => <PostStatus value={value}/>
			},
			postType: {
				title: "type",
				styles: {
					width: "10%",
					justifyContent: "center"
				},
				customWrapper: (value) => <PostType value={value}/>
			},
			created: {
				customWrapper: stdDate,
				styles: {
					width: "10%",
					justifyContent: "center"
				}
			}
		}
	}

	return <SingleFetchDataListView fetch={useFetchAdminPosts} itemsMapper={itemsMapper} options={options}/>

}

export default AdminPosts;