import useFetching from "./useFetching";
import {useSelector} from "react-redux";
import {fetchOptions} from "../actions/options";

const useFetchingOptions = () => {
	useFetching(() => fetchOptions(), []);
	return useSelector((state) => state.panel.options);
}

export default useFetchingOptions;