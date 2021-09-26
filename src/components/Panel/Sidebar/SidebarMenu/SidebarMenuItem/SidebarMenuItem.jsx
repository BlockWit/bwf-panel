import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	divider: {
		background: "#464646"
	},
	iconColor: {
		color: "#CCCCCC"
	},
	listItem: {
		// marginTop: "4px",
		// marginBottom: "4px",
		borderRadius: "5px",
		"&:hover": {
			backgroundColor: "#333333",
			color: "#DDDDDD",
			"& .MuiListItemIcon-root": {
				color: "#666666"
			}
		}
	},
	listItemActive: {
		background: '#444444',
		color: '#EEEEEE'
	},
	listItemIcon: {
		minWidth: '40px'
	},
	menuItemContainer: {
		marginTop: "2px",
		marginBottom: "2px",
		marginLeft: "5px",
		marginRight: "5px"
	},
	menuContainer: {
		paddingTop: "0px",
		paddingBottom: "0px"
	}
}));


const SidebarMenuItem = ({index, item}) => {
	const classes = useStyles();

	return (
		<div className={classes.menuItemContainer} key={index}>
			<ListItem button component={NavLink}
								to={item.link}
								exact
								activeClassName={classes.listItemActive}
								className={classes.listItem}>
				<ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
				<ListItemText primary={item.name}/>
			</ListItem>
		</div>
	);

}

export default SidebarMenuItem;