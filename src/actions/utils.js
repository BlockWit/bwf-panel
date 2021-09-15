import axiosConfig from "../config/axiosConfig";

const httpInitJSONConfig = {
	headers: {
		'Content-Type': 'application/json',
	}
}

const httpInitConfigJsonGET = {
	...httpInitJSONConfig,
	method: 'GET'
};

const httpInitConfigJsonPOST = {
	...httpInitJSONConfig,
	method: 'POST'
};

export function fetchJsonDataPOST(props) {
	return fetchJsonData({...props, httpInit: {...httpInitConfigJsonPOST, body: props.body}});
}

export function fetchJsonDataGET(props) {
	return fetchJsonData({...props, httpInit: httpInitConfigJsonGET});
}

export function fetchJsonData(props) {
	console.log(props);
	const {url, httpInit, fetchDataBegin, fetchDataSuccess, fetchDataFailure, fetchDataAuthError} = props;
	let httpRequest = null;
	let httpStatus = 0;
	let httpStatusText = "";
	let ok = false;
	const targetURL = axiosConfig.baseUrl + url;
	console.log("FETCH DATA from URL ", targetURL);
	return dispatch => {
		dispatch(fetchDataBegin());
		try {
			httpRequest = new Request(targetURL, httpInit)
		} catch (error) {
			dispatch(fetchDataFailure(error));
		}
		return fetch(httpRequest)
			.then(res => {
				httpStatus = res.status;
				httpStatusText = res.statusText;
				return res;
			})
			.then(res => {
				console.log("S3");
				switch (httpStatus) {
					case 200:
					case 201:
						ok = true;
						return res.json();
					case 401:
						const authError = {
							httpStatus: httpStatus,
							httpStatusText: httpStatusText,
						}
						dispatch(fetchDataAuthError(authError));
						return authError;
					default:
						const otherError = {
							status: httpStatus,
							statusText: httpStatusText,
						}
						dispatch(fetchDataFailure(otherError));
						break;
				}
				return res;
			}).then(data => {
				if (ok) {
					dispatch(fetchDataSuccess(data));
				} else {
					return data;
				}
			})
			.catch(error => {
				error.httpStatus = httpStatus;
				error.httpStatusText = httpStatusText;
				dispatch(fetchDataFailure(error));
			});
	};
}