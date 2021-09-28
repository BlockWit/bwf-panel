import useFetchAuthQuery from "../common/useFetchAuthQuery";
import {API_FRONT_CONFIG} from "../../config/apiConfig";

export const DK_FRONT_CONFIG = "front.config";

const useFrontFetchPost = (params) => {
	return useFetchAuthQuery(DK_FRONT_CONFIG, API_FRONT_CONFIG, params);
}

export default useFrontFetchPost;