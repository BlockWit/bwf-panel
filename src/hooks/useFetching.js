import {useDispatch} from "react-redux";
import {useEffect} from "react";

const useFetching = (someFetchActionCreator, arr) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(someFetchActionCreator());
	}, arr);
}

export default useFetching;