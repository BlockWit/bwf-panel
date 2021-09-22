import {isTokenInStorage, removeTokenFromStorage, setTokenToStorage} from '../../utils/auth/storageTokenOperations';
import {AUTH_FAILURE, AUTH_LOGOUT, AUTH_STARTED, AUTH_SUCCESS} from "../../actions/auth";
import rolesFromJWT from "../../utils/rolesFromJWT";
import rolesFromJWTStorage from "../../utils/rolesFromJWTStorage";

let initialState = {
	authenticated: isTokenInStorage(),
	error: null,
	loading: false,
	fail: false,
	roles: rolesFromJWTStorage()
};

const authReducer = (state = initialState, action) => {
	if (action.type === AUTH_STARTED) {
		removeTokenFromStorage();
		return {
			...state,
			authenticated: false,
			loading: true,
			error: null,
			fail: false,
			roles: []
		};
	} else if (action.type === AUTH_SUCCESS) {
		const token = action.payload.token;
		setTokenToStorage(action.payload.token);
		const roles = rolesFromJWT(token);
		return {
			...state,
			authenticated: true,
			loading: false,
			error: null,
			fail: false,
			roles: roles
		};
	} else if (action.type === AUTH_FAILURE) {
		return {
			...state,
			authenticated: false,
			loading: false,
			error: action.payload.statusText,
			fail: true,
			roles: []
		};
	} else if (action.type === AUTH_LOGOUT) {
		removeTokenFromStorage();
		return {
			...state,
			authenticated: false,
			loading: false,
			error: null,
			fail: false,
			roles: []
		};
	}
	return state;
}

export default authReducer;