import {useSelector} from "react-redux";

export const useRoles = () => {
	return useSelector(store => store.auth.roles);
}