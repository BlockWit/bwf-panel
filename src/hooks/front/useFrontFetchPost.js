import useFetchAuthQuery from "../common/useFetchAuthQuery";
import {API_FRONT_POSTS_POST_VIEW} from "../../config/apiConfig";

export const DK_FRONT_POSTS_POST_VIEW = "front.posts.post.";

const useFrontFetchPost = ({postId, ...params}) => {
	return useFetchAuthQuery(DK_FRONT_POSTS_POST_VIEW + postId, API_FRONT_POSTS_POST_VIEW + postId, params);
}

export default useFrontFetchPost;