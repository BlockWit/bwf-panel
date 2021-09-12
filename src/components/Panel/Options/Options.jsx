import React from "react";
import styles from './Options.module.css';
import DataGrid from "../common/DataGrid/DataGrid";
import Box from "../common/Box/Box";
import useFetchingOptions from "../../../hooks/useFetchingOptions";
import Loading from "../../Loading/Loading";


const Options = (props) => {

	const {loading, items} = useFetchingOptions();

	if (loading)
		return <Loading/>

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
		data: items.map(t => [t.id, t.name, t.type, t.value, t.description])
	}

	return (
		<Box>
			<DataGrid state={preparedProps}/>
		</Box>
	);

}

export default Options;

