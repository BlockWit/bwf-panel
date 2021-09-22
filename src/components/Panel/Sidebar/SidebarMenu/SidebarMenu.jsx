import {Divider, List} from "@material-ui/core";
import React from "react";
import {AccountCircle, PeopleAlt, Settings} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {PATH_PANEL_ACCOUNTS, PATH_PANEL_OPTIONS, PATH_PANEL_PROFILE} from "../../../../config/urlsConfig";
import SidebarMenuItem from "./SidebarMenuItem/SidebarMenuItem";
import ExpandableSidebarMenuItem from "./ExpandableSidebarMenuItem/ExpandableSidebarMenuItem";

export const MT_DIVIDER = "MT_DIVIDER";
export const MT_ITEM = "MT_ITEM";
export const MT_EXPANDABLE_ITEM = "MT_EXPANDABLE_ITEM";

const useStyles = makeStyles((theme) => ({
	divider: {
		background: "#464646"
	},
	iconColor: {
		color: "#CCCCCC"
	},
	listItem: {
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
		margin: "5px"
	},
	menuContainer: {
		paddingTop: "0px",
		paddingBottom: "0px"
	}
}));


const SidebarMenu = ({menu}) => {
	const classes = useStyles();

	return (
		<List className={classes.menuContainer}>
			{menu.map((item, index) => {
				if (item.type === MT_ITEM) {
					return <SidebarMenuItem key={index} index={index} item={item}/>
				} else if (item.type === MT_EXPANDABLE_ITEM) {
					return <ExpandableSidebarMenuItem key={index} index={index} item={item}/>
				} else if (item.type === MT_DIVIDER) {
					return <Divider className={classes.divider} key={index}/>
				} else {
					return <></>
				}
			})}
		</List>
	);

}

export default SidebarMenu;