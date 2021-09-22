import parseJWT from "./parseJWT";

const rolesFromJWT = (token) => {
	const parsedToken = parseJWT(token);
	if (!!parsedToken) {
		const roles = parsedToken.roles;
		if (!!roles) {
			if (Array.isArray(roles))
				return roles;

			return [roles];
		}
	}
	return [];
}

export default rolesFromJWT;