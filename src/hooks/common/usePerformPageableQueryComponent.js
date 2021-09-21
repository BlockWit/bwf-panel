import Loading from "../../components/common/Loading/Loading";
import React, {useState} from "react";


const usePerformPageableQueryComponent = (fetch, render) => {
	const [page, setPage] = useState(1)

	const {data, error, isError, isLoading} = fetch({page: page});

	if (isLoading)
		return <Loading/>

	if (isError) {
		if (error) {
			return 'An error has occurred: ' + error.message;
		} else {
			return 'An error has occurred';
		}
	}

	return render(data, page, setPage);
}

export default usePerformPageableQueryComponent;