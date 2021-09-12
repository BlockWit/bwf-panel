import React from "react";
import styles from './DataGridItem.module.css';

const DataGridItem = (props) => {

	let state = props.state;

	return (
		<div className={styles.data_grid_item + ' ' + (state.last ? styles.data_grid_item__last : '')}>
			{state.data.map((col, index) =>
				<div key={index} className={styles.data_grid_item__col + ' ' + state.styles[index].styles}>{col}</div>
			)}
		</div>
	);

}

export default DataGridItem;