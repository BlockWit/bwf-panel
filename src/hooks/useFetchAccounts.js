import {API_ACCOUNTS} from "../config/apiConfig";
import useFetchAuthQuery from "./common/useFetchAuthQuery";

export const DK_ACCOUNTS = "accounts";

const useFetchAccounts = () => {
	return useFetchAuthQuery(DK_ACCOUNTS, API_ACCOUNTS);
}

export default useFetchAccounts;