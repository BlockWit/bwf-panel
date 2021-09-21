import React from "react";
import styles from './Options.module.css';
import useFetchOptions from "../../../hooks/useFetchOptions";
import PaginationDataGrid from "../../common/PaginationDataGrid/PaginationDataGrid";

const Options = (props) => {

	const prepareItems = (items) => ({
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
	})

	return <PaginationDataGrid dataFetcher={useFetchOptions} itemsPerformer={prepareItems}/>;

}

export default Options;

