import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	dataContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column"
	},
	dataContainerRow: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		padding: "12px",
		borderBottom: "1px solid #e0e0e0"
	},
	dataContainerRowBody: {
		cursor: "pointer",
		'&:hover': {
			backgroundColor: "#f3f3f3"
		}
	},
	dataContainerRowBodyLast: {
		borderBottom: "none"
	},
	dataContainerRowHeader: {
		fontWeight: "bold"
	}
}));

const DataGrid = ({items}) => {

	const classes = useStyles();

	const columnNames = Object.keys(items[0]);

	const performWidth = length => ({width: 100 / length + "%"});

	return (
		<>
			<div className={classes.dataContainer}>
				<div className={classes.dataContainerRow + '  ' + classes.dataContainerRowHeader}>
					{columnNames.map((colName, colNameIndex) =>
						<div className={classes.dataContainerCell}
								 style={performWidth(columnNames.length)}
								 key={colNameIndex}>{colName}</div>
					)}
				</div>
				{items.map((item, itemIndex) =>
					<div
						className={classes.dataContainerRow + '  ' + classes.dataContainerRowBody + ' ' + (items.length === (itemIndex + 1) ? classes.dataContainerRowBodyLast : '')}
						key={itemIndex}>
						{Object.entries(item).map(([colName, colValue], index) =>
							<div className={classes.dataContainerCell}
									 style={performWidth(columnNames.length)}
									 key={colName}>{colValue ? colValue.toString() : ''}</div>
						)}
					</div>
				)}
			</div>
		</>
	);

}

export default DataGrid;