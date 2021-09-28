import React from "react";
import usePerformSingleQueryComponent from "../../../../../hooks/common/usePerformSingleQueryComponent";
import useFrontFetchMenu from "../../../../../hooks/front/useFrontFetchMenu";
import NavbarMenuItem from "../NavbarMenuItem/NavbarMenuItem";

const NavbarCustomMenuItems = () => usePerformSingleQueryComponent(useFrontFetchMenu, data => {
	return (
		<>
			{data.children.map((menuItem, menuItemIndex) =>
				<NavbarMenuItem key={menuItemIndex} to={menuItem.link} name={menuItem.name}/>
			)}
		</>
	);
})


export default NavbarCustomMenuItems;