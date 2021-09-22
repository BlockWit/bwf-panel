import {Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import React from "react";
import {AccountCircle, PeopleAlt, Settings} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {PATH_PANEL_ACCOUNTS, PATH_PANEL_OPTIONS, PATH_PANEL_PROFILE} from "../../../../config/urlsConfig";
import {NavLink} from "react-router-dom";

export const MT_DIVIDER = "MT_DIVIDER";
export const MT_ITEM = "MT_ITEM";


// root: {
// 	"&$selected": {
// 		backgroundColor: "red",
// 			color: "white",
// 			"& .MuiListItemIcon-root": {
// 			color: "white"
// 		}
// 	},
// 	"&$selected:hover": {
// 		backgroundColor: "purple",
// 			color: "white",
// 			"& .MuiListItemIcon-root": {
// 			color: "white"
// 		}
// 	},
// 	"&:hover": {
// 		backgroundColor: "blue",
// 			color: "white",
// 			"& .MuiListItemIcon-root": {
// 			color: "white"
// 		}
// 	}
// },
// selected: {}


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


const SidebarMenu = () => {
	const classes = useStyles();

	const menu = [
		{
			"type": MT_ITEM,
			"icon": <AccountCircle className={classes.iconColor}/>,
			"name": "Profile",
			"link": PATH_PANEL_PROFILE
		},
		{
			"type": MT_DIVIDER,
		},
		{
			"type": MT_ITEM,
			"icon": <PeopleAlt className={classes.iconColor}/>,
			"name": "Accounts",
			"link": PATH_PANEL_ACCOUNTS
		},
		{
			"type": MT_ITEM,
			"icon": <Settings className={classes.iconColor}/>,
			"name": "Options",
			"link": PATH_PANEL_OPTIONS
		}
	]

	return (
		<List className={classes.menuContainer}>
			{menu.map((item, index) => {
				if (item.type === MT_ITEM) {
					return (
						<div className={classes.menuItemContainer} key={index}>
							<ListItem button component={NavLink} to={item.link}
												activeClassName={classes.listItemActive}
												className={classes.listItem}>
								<ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
								<ListItemText primary={item.name}/>
							</ListItem>
						</div>
					);
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