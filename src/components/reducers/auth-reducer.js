import {isTokenInStorage, removeTokenFromStorage, setTokenToStorage} from '../../utils/auth/storageTokenOperations';
import {AUTH_FAILURE, AUTH_LOGOUT, AUTH_STARTED, AUTH_SUCCESS} from "../../actions/auth";

let initialState = {
	authenticated: isTokenInStorage(),
	error: null,
	loading: false,
	fail: false
};

const authReducer = (state = initialState, action) => {
	if (action.type === AUTH_STARTED) {
		removeTokenFromStorage();
		return {
			...state,
			authenticated: false,
			loading: true,
			error: null,
			fail: false
		};
	} else if (action.type === AUTH_SUCCESS) {
		setTokenToStorage(action.payload.token);
		return {
			...state,
			authenticated: true,
			loading: false,
			error: null,
			fail: false
		};
	} else if (action.type === AUTH_FAILURE) {
		return {
			...state,
			authenticated: false,
			loading: false,
			error: action.payload.statusText,
			fail: true
		};
	} else if (action.type === AUTH_LOGOUT) {
		removeTokenFromStorage();
		return {
			...state,
			authenticated: false,
			loading: false,
			error: null,
			fail: false
		};
	}
	return state;
}

export default authReducer;