import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {useDispatch} from "react-redux";
import {logout} from "../../actions/auth";

const useAuthQuery = (key, fn) => {
	const [authRedirect, setAuthRedirect] = useState(false);
	const queryResult = useQuery(key, () => fn((value) => setAuthRedirect(value)), {fetchPolicy: 'cache-only'});
	const dispatch = useDispatch();

	useEffect(() => {
		if (authRedirect) {
			dispatch(logout())
		}
	}, [dispatch, authRedirect]);

	return queryResult;
}

export default useAuthQuery;