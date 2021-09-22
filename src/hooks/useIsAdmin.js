import {useRoles} from "./useRoles";
import {ROLES_ADMIN} from "../utils/roles";

export const useIsAdmin = () => {
	const roles = useRoles();
	return roles.contains(ROLES_ADMIN);
}