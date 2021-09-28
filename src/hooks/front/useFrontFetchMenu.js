import useFetchAuthQuery from "../common/useFetchAuthQuery";
import {API_FRONT_MENU} from "../../config/apiConfig";

export const DK_FRONT_MENU = "front.menu";

const useFrontFetchPost = (props) => {
	return useFetchAuthQuery(DK_FRONT_MENU, API_FRONT_MENU, props);
}

export default useFrontFetchPost;