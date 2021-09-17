import React, {useEffect, useState} from "react";
import {useQuery} from "react-query";
import axiosConfig from "../../../config/axiosConfig";
import {API_OPTIONS_SUFFIX} from "../../../config/apiConfig";
import {getTokenFromStorage} from "../../../utils/auth/storageTokenOperations";
import {useDispatch} from "react-redux";
import axios from "axios";
import {logout} from "../../../actions/auth";
import styles from './Options.module.css';
import Loading from "../../common/Loading/Loading";
import DataGrid from "../common/DataGrid/DataGrid";

// TODO: Remove common code outside
function fetchPosts(changeStateCallback) {
	return axios.get(axiosConfig.baseUrl + API_OPTIONS_SUFFIX, {
		headers: {
			Authorization: `Bearer ${getTokenFromStorage()}`
		}
	}).then((response) => {
		changeStateCallback(false);
		return response.data;
	}).catch(error => {
		if (error.response && error.response.status === 401) {
			changeStateCallback(true);
		}
		throw Error(error);
	})
}

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

const Options = (props) => {
	const queryResult = useAuthQuery("options", fetchPosts);
	const {data, error, isError, isLoading} = queryResult;

	if (isLoading)
		return <Loading/>

	if (isError) {
		if (error) {
			return 'An error has occurred: ' + error.message;
		} else {
			return 'An error has occurred';
		}
	}

	let preparedProps = {
		header: [
			{name: "id", styles: styles.options__header_col_id},
			{name: "name", styles: styles.options__header_col_name},
			{name: "type", styles: styles.options__header_col_type},
			{name: "value", styles: styles.options__header_col_value},
			{name: "description", styles: styles.options__header_col_description}
		],
		body: [
			{name: "id", styles: styles.options__body_col_id},
			{name: "name", styles: styles.options__body_col_name},
			{name: "type", styles: styles.options__header_col_type},
			{name: "value", styles: styles.options__body_col_value},
			{name: "description", styles: styles.options__header_col_description}
		],
		data: data.map(t => [t.id, t.name, t.type, t.value, t.description])
	}

	return (
		<DataGrid state={preparedProps}/>
	);

}

export default Options;

