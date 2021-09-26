import {API_ADMIN_POSTS} from "../../config/apiConfig";
import useFetchAuthQuery from "../common/useFetchAuthQuery";

export const DK_ADMIN_POSTS = "admin.posts";

const useFetchAdminPosts = (params) => {
	return useFetchAuthQuery(DK_ADMIN_POSTS, API_ADMIN_POSTS, params);
}

export default useFetchAdminPosts;