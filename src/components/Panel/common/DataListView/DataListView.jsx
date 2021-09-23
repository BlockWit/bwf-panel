import React from "react";
import {Grid} from "@material-ui/core";
import arrayEmpty from "../../../../utils/arrayEmpty";
import DataGrid from "./DataGrid/DataGrid";
import DataListPagination from "./DataViewPagination/DataViewPagination";

const DataListView = ({
												items,
												pagesCount,
												pagesSize,
												page,
												setPageNumber,
												setPageSize
											}) => {

	if (arrayEmpty(items))
		return <></>

	return (
		<>
			<Grid container spacing={2}>
				<DataListPagination page={page}
														pagesCount={pagesCount}
														pagesSize={pagesSize}
														setPageSize={setPageSize}
														setPageNumber={setPageNumber}/>
			</Grid>
			<Grid container item xs={12}>
				<DataGrid items={items}/>
			</Grid>
		</>
	);

}

export default DataListView;