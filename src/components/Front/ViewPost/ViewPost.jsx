import React from "react";
import {Container, makeStyles} from "@material-ui/core";
import usePerformSingleQueryComponent from "../../../hooks/common/usePerformSingleQueryComponent";
import useFrontFetchPost from "../../../hooks/front/useFrontFetchPost";

const useStyles = makeStyles((theme) => ({
	container: {}
}));

const ViewPost = (props) => {
	const classes = useStyles();


	const useFetchTargetPost = (params) => {
	 	return useFrontFetchPost({postId: props.match.params.postId})
	}



	return usePerformSingleQueryComponent(useFetchTargetPost, data => {
	 	return (
	 		<Container className={classes.container}>
				<div dangerouslySetInnerHTML={{ __html: data.content }}></div>
	 		</Container>
	 	)
	 });

}

export default ViewPost;