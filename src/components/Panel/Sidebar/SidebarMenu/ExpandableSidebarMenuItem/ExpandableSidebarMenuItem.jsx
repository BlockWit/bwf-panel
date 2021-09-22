import {Collapse, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarMenu from "../SidebarMenu";
import {useLocation} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	divider: {
		background: "#464646"
	},
	iconColor: {
		color: "#CCCCCC"
	},
	listItem: {
		//borderRadius: "5px",
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
		//margin: "5px"
	},
	menuContainer: {
		paddingTop: "0px",
		paddingBottom: "0px"
	},
	submenu: {
		paddingLeft: "35px"
	},
	menuSubheader: {
		textTransform: "uppercase",
		fontWeight: "bold",
		color: "#AAAAAA"
	}
}));


const ExpandableSidebarMenuItem = ({index, item}) => {
	const classes = useStyles();

	const location = useLocation();

	let childrenActive = false;
	item.children.forEach(subItem => {
		if (location.pathname.startsWith(subItem.link))
			childrenActive = true;
	});

	const [open, setOpen] = useState(childrenActive);


	const handleClick = () => setOpen((prev) => !prev);

	return (
		<React.Fragment>
			<div className={classes.menuItemContainer}>
				<ListItem button
									to={item.link}
									onClick={handleClick}
									className={classes.listItem}>
					{item.icon && <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>}
					<ListItemText primary={<span className={classes.menuSubheader}>{item.name}</span>}/>
					{open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
				</ListItem>
			</div>
			<Collapse in={open} timeout="auto" unmountOnExit key={index}>
				<SidebarMenu menu={item.children}/>
			</Collapse>
		</React.Fragment>
	);

}

export default ExpandableSidebarMenuItem;