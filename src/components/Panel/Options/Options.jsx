import React from "react";
import styles from './Options.module.css';
import Loading from "../../common/Loading/Loading";
import DataGrid from "../common/DataGrid/DataGrid";
import useFetchOptions from "../../../hooks/useFetchOptions";

const Options = (props) => {
	const {data, error, isError, isLoading} = useFetchOptions();

	if (isLoading)
		return <Loading/>

	if (isError) {
		if (error) {
			return 'An error has occurred: ' + error.message;
		} else {
			return 'An error has occurred';
		}
	}

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
		<DataGrid state={preparedProps}/>
	);

}

export default Options;

