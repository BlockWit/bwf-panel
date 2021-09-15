import useFetching from "./useFetching";
import {useSelector} from "react-redux";

const useFetchingItems = (fetchItems, stateMapper) => {
	useFetching(fetchItems, []);
	return useSelector(stateMapper);
}

export default useFetchingItems;