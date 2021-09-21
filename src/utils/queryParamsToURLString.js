export const queryParamsToURLString = (queryParams) => {
	if (typeof queryParams != "undefined"
		&& queryParams != null
		&& Object.keys(queryParams).length != null
		&& Object.keys(queryParams).length > 0) {
		let queryParamString = "?";
		for (const [key, value] of Object.entries(queryParams)) {
			if (value !== null || value !== '') {
				queryParamString += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
			}
		}
		return queryParamString.slice(0, -1);
	}
	return "";
}