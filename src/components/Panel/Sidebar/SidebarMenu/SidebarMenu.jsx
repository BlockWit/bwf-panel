import {Divider, List} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import SidebarMenuItem from "./SidebarMenuItem/SidebarMenuItem";
import ExpandableSidebarMenuItem from "./ExpandableSidebarMenuItem/ExpandableSidebarMenuItem";

export const MT_DIVIDER = "MT_DIVIDER";
export const MT_ITEM = "MT_ITEM";
export const MT_EXPANDABLE_ITEM = "MT_EXPANDABLE_ITEM";

const useStyles = makeStyles((theme) => ({
	divider: {
		marginTop: "8px",
		marginBottom: "8px",
		//background: "#464646",
		width: "95%",
		margin: "auto",
		//background: "linear-gradient(to right, rgba(60,84,113,0.08), rgba(60,84,113,0.95), rgba(60,84,113,0.08))"
		background: "linear-gradient(to right, rgba(60,84,113,0.08), rgba(96,142,197,0.95), rgba(60,84,113,0.08))"
	},
	menuContainer: {
		paddingTop: "0px",
		paddingBottom: "0px"
	}
}));


const SidebarMenu = ({menu, container = true}) => {
	const classes = useStyles();

	let menuView =
		<>
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
		</>

	if (container)
		return (
			<List className={classes.menuContainer}>
				{menuView}
			</List>
		);

	return menuView;
}

export default SidebarMenu;