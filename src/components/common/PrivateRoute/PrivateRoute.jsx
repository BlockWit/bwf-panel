import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useIsAuthenticated} from "../../../utils/auth/auth";

const PrivateRoute = ({component, ...rest}) => {

	const authenticated = useIsAuthenticated();

	return (
		<Route {...rest} render={(props) => (
			authenticated ? component(props) : <Redirect to={{pathname: '/front/login', state: {from: props.location}}}/>
		)}/>
	);

}

export default PrivateRoute;