import {API_ADMIN_PERMISSIONS} from "../../config/apiConfig";
import useFetchAuthQuery from "../common/useFetchAuthQuery";

export const DK_ADMIN_PERMISSIONS = "admin.permissions";

const useFetchAdminPermissions = (params) => {
	return useFetchAuthQuery(DK_ADMIN_PERMISSIONS, API_ADMIN_PERMISSIONS, params);
}

export default useFetchAdminPermissions;