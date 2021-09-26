import {API_ADMIN_OPTIONS} from "../../config/apiConfig";
import useFetchAuthQuery from "../common/useFetchAuthQuery";

export const DK_ADMIN_OPTIONS = "admin.options";

const useFetchAdminOptions = (params) => {
	return useFetchAuthQuery(DK_ADMIN_OPTIONS, API_ADMIN_OPTIONS, params);
}

export default useFetchAdminOptions;