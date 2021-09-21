import Loading from "../../components/common/Loading/Loading";
import React, {useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import URLSearchParams from '@ungap/url-search-params';

export const UP_PAGE = 'page';

const usePerformPageableQueryComponent = (fetch, render) => {
	const location = useLocation();
	const history = useHistory();
	const urlSearchParams = new URLSearchParams(location.search);
	const [page, setPage] = useState(urlSearchParams.has(UP_PAGE) ? parseInt(urlSearchParams.get(UP_PAGE)) : 1)
	const {data, error, isError, isLoading} = fetch({page: page});

	if (isLoading)
		return <Loading/>

	if (isError) {
		if (error) {
			return 'An error has occurred: ' + error.message;
		} else {
			return 'An error has occurred';
		}
	}

	return render(data, page, (event, newPage) => {
		setPage(newPage);
		history.push({
			pathname: location.pathname,
			search: '?' + UP_PAGE + '=' + newPage
		})
	});

}

export default usePerformPageableQueryComponent;