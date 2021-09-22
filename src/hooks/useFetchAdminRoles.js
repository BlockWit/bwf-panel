import {API_ADMIN_ROLES} from "../config/apiConfig";
import useFetchAuthQuery from "./common/useFetchAuthQuery";

export const DK_ADMIN_ROLES = "admin.roles";

const useFetchAdminRoles = (params) => {
	return useFetchAuthQuery(DK_ADMIN_ROLES, API_ADMIN_ROLES, params);
}

export default useFetchAdminRoles;