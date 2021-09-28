import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {useDispatch} from "react-redux";
import {logout} from "../../actions/auth";

const useAuthQuery = (key, fn, params = null) => {
	const [authRedirect, setAuthRedirect] = useState(false);
	const extraKeys = params === null ? [] : Object.values(params);
	const combinedKey = params === null ? key : [key, extraKeys];
	const queryResult = useQuery(combinedKey, () => fn(setAuthRedirect), {
		// refetchInterval: 10000*60*10,
		// refetchIntervalInBackground: 10000*60*10,
		// refetchOnMount: false,
		// refetchOnReconnect: false,
		// refetchOnWindowFocus: false,

	});
	const dispatch = useDispatch();

	useEffect(() => {
		if (authRedirect) {
			dispatch(logout())
		}
	}, [dispatch, authRedirect]);

	return queryResult;
}

export default useAuthQuery;