import {useRoles} from "../../../hooks/useRoles";
import React from "react";

const RoleProtected = ({role, children}) => {
	const roles = useRoles();
	if (role != null && !roles.includes(role))
		return <></>
	return children;
}

export default RoleProtected;

