import rolesFromJWT from "./rolesFromJWT";
import {getTokenFromStorage} from "./auth/storageTokenOperations";

export const rolesFromJWTStorage = () => {
	return rolesFromJWT(getTokenFromStorage());
}

export default rolesFromJWTStorage;