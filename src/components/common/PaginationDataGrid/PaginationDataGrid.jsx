import React from "react";
import usePerformPageableQueryComponent from "../../../hooks/common/usePerformPageableQueryComponent";
import Pagination from "@material-ui/lab/Pagination";
import DataGrid from "../../Panel/common/DataGrid/DataGrid";
import {Grid, MenuItem, Select} from "@material-ui/core";

const PaginationDataGrid = (props) => usePerformPageableQueryComponent(props.dataFetcher, ({
																																														 data,
																																														 setPageNumber,
																																														 setPageSize
																																													 }) => {
	let preparedProps = props.itemsPerformer(data.items);

	return (
		<>
			<Grid container spacing={2}>
				<Grid container item xs={6} justifyContent="flex-start">
					<Pagination count={data.pagesCount} shape="rounded" page={data.page} onChange={setPageNumber}/>
				</Grid>
				<Grid container item xs={6} justifyContent="flex-end">
					<Select
						value={data.pageSize}
						label="Per page"
						onChange={(event, element) => setPageSize(event, element.props.value)}
					>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={25}>25</MenuItem>
						<MenuItem value={50}>50</MenuItem>
						<MenuItem value={100}>100</MenuItem>
					</Select>
				</Grid>
			</Grid>
			<DataGrid state={preparedProps}/>
		</>
	);

})

export default PaginationDataGrid;

