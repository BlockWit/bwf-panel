import {fetchOptions} from "../actions/options";
import useFetchingItems from "./useFetchingItems";

const useFetchingOptions = () => useFetchingItems(fetchOptions, state => state.panel.options)

export default useFetchingOptions;