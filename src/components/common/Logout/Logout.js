import React, {useEffect} from "react";
import {Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../../actions/auth";
import {useIsAuthenticated} from "../../../utils/auth/auth";
import Loading from "../Loading/Loading";
import {PATH_FRONT_LOGIN} from "../../../config/urlsConfig";

const Logout = () => {

	const authenticated = useIsAuthenticated()
	const dispatch = useDispatch();

	useEffect(() => {
		if (authenticated) {
			dispatch(logout());
		}
	});

	if (authenticated)
		return <Loading/>

	return <Redirect to={PATH_FRONT_LOGIN}/>;
}

export default Logout;