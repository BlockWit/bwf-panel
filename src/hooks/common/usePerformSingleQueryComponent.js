import Loading from "../../components/common/Loading/Loading";
import React from "react";

const usePerformSingleQueryComponent = (fetch, render) => {
	const {data, error, isError, isLoading} = fetch();

	if (isLoading)
		return <Loading/>

	if (isError) {
		if (error) {
			return 'An error has occurred: ' + error.message;
		} else {
			return 'An error has occurred';
		}
	}

	return render(data);

}

export default usePerformSingleQueryComponent;