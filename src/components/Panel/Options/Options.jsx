import React from "react";
import styles from './Options.module.css';
import DataGrid from "../common/DataGrid/DataGrid";
import useFetchOptions from "../../../hooks/useFetchOptions";
//import usePerformQueryComponent from "../../../hooks/common/usePerformQueryComponent";
import usePerformPageableQueryComponent from "../../../hooks/common/usePerformPageableQueryComponent";
import {Typography} from "@material-ui/core";

const Options = (props) => usePerformPageableQueryComponent(useFetchOptions, (data, page, setPage) => {

	let preparedProps = {
		header: [
			{name: "id", styles: styles.options__header_col_id},
			{name: "name", styles: styles.options__header_col_name},
			{name: "type", styles: styles.options__header_col_type},
			{name: "value", styles: styles.options__header_col_value},
			{name: "description", styles: styles.options__header_col_description}
		],
		body: [
			{name: "id", styles: styles.options__body_col_id},
			{name: "name", styles: styles.options__body_col_name},
			{name: "type", styles: styles.options__header_col_type},
			{name: "value", styles: styles.options__body_col_value},
			{name: "description", styles: styles.options__header_col_description}
		],
		data: data.map(t => [t.id, t.name, t.type, t.value, t.description])
	}

	return (
		<>
			<Typography>Page: {page}</Typography>
			<Pagination count={10} shape="rounded" />
			<DataGrid state={preparedProps}/>
		</>
	);

})

export default Options;

