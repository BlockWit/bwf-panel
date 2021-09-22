import Loading from "../../components/common/Loading/Loading";
import React, {useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import URLSearchParams from '@ungap/url-search-params';
import {queryParamsToURLString} from "../../utils/queryParamsToURLString";

export const UP_PAGE_NUMBER = 'page';
export const UP_PAGE_SIZE = 'size';

export const DV_PAGE_NUMBER = 1;
export const DV_PAGE_SIZE = 10;

const usePerformPageableQueryComponent = (fetch, render) => {
	const location = useLocation();
	const history = useHistory();
	const urlSearchParams = new URLSearchParams(location.search);
	const [pageNumber, setPageNumber] = useState(urlSearchParams.has(UP_PAGE_NUMBER) ? parseInt(urlSearchParams.get(UP_PAGE_NUMBER)) : DV_PAGE_NUMBER);
	const [pageSize, setPageSize] = useState(urlSearchParams.has(UP_PAGE_SIZE) ? parseInt(urlSearchParams.get(UP_PAGE_SIZE)) : DV_PAGE_SIZE);
	const {data, error, isError, isLoading} = fetch({page: pageNumber, size: pageSize});

	if (isLoading)
		return <Loading/>

	if (isError) {
		if (error) {
			return 'An error has occurred: ' + error.message;
		} else {
			return 'An error has occurred';
		}
	}

	const pushHistory = (pageNumber, pageSize) => {
		history.push({
			pathname: location.pathname,
			search: queryParamsToURLString({
				[UP_PAGE_NUMBER]: pageNumber,
				[UP_PAGE_SIZE]: pageSize
			})
		})
	}

	return render({
		data: data,
		setPageNumber: (event, newPageNumber) => {
			setPageNumber(newPageNumber);
			pushHistory(newPageNumber, data.pageSize);
		},
		setPageSize: (event, newPageSize) => {
			setPageSize(newPageSize);
			pushHistory(data.page, newPageSize);
		},
	});

}

export default usePerformPageableQueryComponent;