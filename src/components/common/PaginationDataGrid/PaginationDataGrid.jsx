import React from "react";
import usePerformPageableQueryComponent from "../../../hooks/common/usePerformPageableQueryComponent";
import Pagination from "@material-ui/lab/Pagination";
import DataGrid from "../../Panel/common/DataGrid/DataGrid";

const PaginationDataGrid = (props) => usePerformPageableQueryComponent(props.dataFetcher, (data, page, setPage) => {

	let preparedProps = props.itemsPerformer(data.items);

	return (
		<>
			<Pagination count={data.pagesCount} shape="rounded" page={page} onChange={setPage}/>
			<DataGrid state={preparedProps}/>
		</>
	);

})

export default PaginationDataGrid;

