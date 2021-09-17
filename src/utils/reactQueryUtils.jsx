import axios from "axios";
import axiosConfig from "../config/axiosConfig";
import {getTokenFromStorage} from "./auth/storageTokenOperations";

const fetchItems = (relativeUrl, authRedirectCallback) => {
	return axios.get(axiosConfig.baseUrl + relativeUrl, {
		headers: {
			Authorization: `Bearer ${getTokenFromStorage()}`
		}
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

