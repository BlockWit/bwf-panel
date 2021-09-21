import {API_ACCOUNTS} from "../config/apiConfig";
import useFetchAuthQuery from "./common/useFetchAuthQuery";

export const DK_ACCOUNTS = "accounts";

const useFetchAccounts = (params = null) => {
	return useFetchAuthQuery(DK_ACCOUNTS, API_ACCOUNTS, params);
}

export default useFetchAccounts;