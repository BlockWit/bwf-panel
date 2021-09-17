import useAuthQuery from "./useAuthQuery";
import fetchItems from "../../utils/reactQueryUtils";

const useFetchAuthQuery = (key, url) => {
	return useAuthQuery(key, (authRedirectCallback) => fetchItems(url, authRedirectCallback));
}

export default useFetchAuthQuery;