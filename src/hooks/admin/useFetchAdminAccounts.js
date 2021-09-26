import {API_ADMIN_ACCOUNTS} from "../../config/apiConfig";
import useFetchAuthQuery from "../common/useFetchAuthQuery";

export const DK_ADMIN_ACCOUNTS = "admin.accounts";

const useFetchAdminAccounts = (params = null) => {
	return useFetchAuthQuery(DK_ADMIN_ACCOUNTS, API_ADMIN_ACCOUNTS, params);
}

export default useFetchAdminAccounts;