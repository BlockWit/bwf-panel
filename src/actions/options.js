import axios from 'axios';
import axiosConfig from "../axiosConfig";

export const FETCH_OPTIONS_STARTED = "FETCH_OPTIONS_STARTED";
export const FETCH_OPTIONS_SUCCESS = "FETCH_OPTIONS_SUCCESS";
export const FETCH_OPTIONS_FAILURE = "FETCH_OPTIONS_FAILURE";

export const fetchOptions = () => {
	return dispatch => {
		dispatch(fetchOptionsStarted());

		axios.get(axiosConfig.baseUrl + '/options', {
			auth: {
				username: axiosConfig.uname,
				password: axiosConfig.pass
			}
		}).then(function (response) {
			//throw new Error('addToDo error!');
			setTimeout(() => {
				dispatch(fetchOptionsSuccess(response.data));
			}, 2500);
		}).catch(function (error) {
			dispatch(fetchOptionsFailure(error));
		});

	};
};

const fetchOptionsSuccess = (data) => ({
	type: FETCH_OPTIONS_SUCCESS,
	payload: data
});

const fetchOptionsStarted = () => ({
	type: FETCH_OPTIONS_STARTED
});

const fetchOptionsFailure = error => ({
	type: FETCH_OPTIONS_FAILURE,
	payload: error
});