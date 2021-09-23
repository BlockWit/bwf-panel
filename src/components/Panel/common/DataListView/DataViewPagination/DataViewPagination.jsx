import React from "react";
import {Grid, MenuItem, Select} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const DataListPagination = ({
															pagesCount,
															pagesSize,
															page,
															setPageNumber,
															setPageSize
														}) => {

	return (
		<>
			<Grid container item xs={6} justifyContent="flex-start">
				<Pagination count={pagesCount} shape="rounded" page={page} onChange={setPageNumber}/>
			</Grid>
			<Grid container item xs={6} justifyContent="flex-end">
				<Select
					value={pagesSize}
					label="Per page"
					onChange={(event, element) => setPageSize(event, element.props.value)}
				>
					<MenuItem value={10}>10</MenuItem>
					<MenuItem value={25}>25</MenuItem>
					<MenuItem value={50}>50</MenuItem>
					<MenuItem value={100}>100</MenuItem>
				</Select>
			</Grid>
		</>
	);

}

export default DataListPagination;