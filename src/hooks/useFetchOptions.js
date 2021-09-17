import {API_OPTIONS} from "../config/apiConfig";
import useFetchAuthQuery from "./common/useFetchAuthQuery";

export const DK_OPTIONS = "options";

const useFetchOptions = () => {
	return useFetchAuthQuery(DK_OPTIONS, API_OPTIONS);
}

export default useFetchOptions;