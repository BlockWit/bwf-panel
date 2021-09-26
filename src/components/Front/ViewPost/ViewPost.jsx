import React from "react";
import {Container, makeStyles} from "@material-ui/core";
import usePerformSingleQueryComponent from "../../../hooks/common/usePerformSingleQueryComponent";
import useFrontFetchPost from "../../../hooks/front/useFrontFetchPost";

const useStyles = makeStyles((theme) => ({
	container: {},
	bsPostViewContent: {
		overflowWrap: "break-word",
		wordWrap: "break-word",
		wordBreak: "break-word",
		height: "100%",
		overflow: "hidden",
		hyphens: "none",
		fontFamily: '"Open Sans", Arial, sans-serif',
		color: "#333",
		fontSize: "120%",
		lineHeight: "150%",
		'& img': {
			display: "block",
			maxWidth: "100%",
			paddingTop: "0.6em",
			paddingBottom: "1em",
		},
		'& p': {
			display: "block",
			margin: "0 0 1.5rem 0",
			marginBottom: "1.5em"
		},
		'& h1, h2, h3, h4, h5': {
			fontFamily: '"Open Sans", Arial, sans-serif',
			fontWeight: 600,
			lineHeight: 1.6,
			color: "inherit"
		},
		'& h2, h3, h4, h5': {
			marginBottom: "0.5rem"
		},
		'& h1': {
			margin: "2.5rem 0 .3rem",
			fontSize: "160%"
		}
	}

}));

const ViewPost = (props) => {
	const classes = useStyles();

	const useFetchTargetPost = (params) => {
		return useFrontFetchPost({postId: props.match.params.postId})
	}

	return usePerformSingleQueryComponent(useFetchTargetPost, data => {
		return (
			<Container className={classes.container}>
				<div className={classes.bsPostViewContent} dangerouslySetInnerHTML={{__html: data.content}}></div>
			</Container>
		)
	});

}

export default ViewPost;