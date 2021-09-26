import axios from "axios";
import axiosConfig from "../config/axiosConfig";
import {getTokenFromStorage} from "./auth/storageTokenOperations";
import {queryParamsToURLString} from "./queryParamsToURLString";
import exist from "./exist";

async function fetchItems(relativeUrl, authRedirectCallback, params = null) {

	console.log("QUERY: ", axiosConfig.baseUrl + relativeUrl + queryParamsToURLString(params));

	const headers = exist(getTokenFromStorage()) ? {Authorization: `Bearer ${getTokenFromStorage()}`} : {};

	return await axios.get(axiosConfig.baseUrl + relativeUrl + queryParamsToURLString(params), {
		headers: headers
	}).then((response) => {
		authRedirectCallback(false);
		return response.data;
	}).catch(error => {
		if (error.response && error.response.status === 401) {
			authRedirectCallback(true);
		}
		throw Error(error);
	})
}

export default fetchItems;


