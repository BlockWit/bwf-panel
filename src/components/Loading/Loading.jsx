import spinnerImage from "../../assets/img/Spinner-1s-200px.svg";
import React from "react";

const Loading = () => {
	return (
		<div className='spinner-background'>
			<img className='img-center' src={spinnerImage} alt="please wait ..."/>
		</div>
	)
}

export default Loading;