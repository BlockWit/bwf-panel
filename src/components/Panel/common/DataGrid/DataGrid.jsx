import React from "react";
import styles from './DataGrid.module.css';
import DataGridItem from "./DataGridItem/DataGridItem";

const DataGrid = (props) => {

	let state = props.state;

	return (
		<div className={styles.data_grid}>
			<div className={styles.data_grid__table_header}>
				{state.header.map((col, index) =>
					<div key={index} className={styles.data_grid__table_header_col + ' ' + col.styles}>{col.name}</div>
				)}
			</div>
			<div className={styles.data_grid__table_body}>
				{state.data.map((row, index) =>
					<DataGridItem key={row[0]} state={{styles: state.body, data: row, last: state.data.length === (index + 1)}}/>
				)}
			</div>
		</div>
	);
}

export default DataGrid;