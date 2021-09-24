import React from "react";
import usePerformPageableQueryComponent from "../../../../hooks/common/usePerformPageableQueryComponent";
import DataListView from "../../common/DataListView/DataListView";

const SingleFetchDataListView = ({
																	 fetch,
																	 options,
																	 itemsMapper
																 }) => {
	return usePerformPageableQueryComponent(fetch, ({
																										data,
																										setPageNumber,
																										setPageSize
																									}) => {

		const {pagesCount, pageSize, page} = data;

		return <DataListView items={itemsMapper(data)}
												 pagesCount={pagesCount}
												 pagesSize={pageSize}
												 page={page}
												 setPageNumber={setPageNumber}
												 setPageSize={setPageSize}
												 options={options}/>
	});
}

export default SingleFetchDataListView;