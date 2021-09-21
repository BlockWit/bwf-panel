import useAuthQuery from "./useAuthQuery";
import fetchItems from "../../utils/reactQueryUtils";

const useFetchAuthQuery = (key, url, params = null) => {
	return useAuthQuery(key, (authRedirectCallback) => fetchItems(url, authRedirectCallback, params), params);
}

export default useFetchAuthQuery;