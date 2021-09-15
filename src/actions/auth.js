import {fetchJsonDataPOST} from "./utils";
import {API_AUTH_SUFFIX} from "../config/apiConfig";

export const AUTH_STARTED = "AUTH_STARTED";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const logout = () => ({
	type: AUTH_LOGOUT
});

export const auth = (credentials) => {
	return fetchJsonDataPOST({
		url: API_AUTH_SUFFIX,
		body: JSON.stringify(credentials),
		fetchDataBegin: actionAuthStarted,
		fetchDataSuccess: actionAuthSuccess,
		fetchDataFailure: actionAuthFailure,
		fetchDataAuthError: actionAuthFailure
	})
};

const actionAuthStarted = () => ({
	type: AUTH_STARTED
});

const actionAuthSuccess = data => ({
	type: AUTH_SUCCESS,
	payload: data
});

const actionAuthFailure = error => ({
	type: AUTH_FAILURE,
	payload: error
});