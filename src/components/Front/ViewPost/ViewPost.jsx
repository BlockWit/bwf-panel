import React from "react";
import {Container, Divider, makeStyles, Typography} from "@material-ui/core";
import usePerformSingleQueryComponent from "../../../hooks/common/usePerformSingleQueryComponent";
import useFrontFetchPost from "../../../hooks/front/useFrontFetchPost";
import exist from "../../../utils/exist";

const useStyles = makeStyles((theme) => ({
	container: {},
	containerArticle: {
		maxWidth: "800px"
	},
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
	},
	postDivider: {
		background: "linear-gradient(to right, rgba(0,0,0,0.05), rgba(0,0,0,0.15), rgba(0,0,0,0.05))"
	},
	postHeader: {
		overflow: "hidden",
		fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
		fontSize: "240%",
		fontWeight: 600
	}

}));

const POST_TYPE_PAGE = "PAGE";
const POST_TYPE_ARTICLE = "ARTICLE";

const ViewPost = (props) => {
	const classes = useStyles();

	const {postId} = props;

	const useFetchTargetPost = (params) => {
		return useFrontFetchPost({postId: exist(postId) ? postId : props.match.params.postId})
	}

	return usePerformSingleQueryComponent(useFetchTargetPost, data => {

		const {postType, content, title} = data;

		const isArticle = postType === POST_TYPE_ARTICLE;

		return (
			<Container className={classes.container + ' ' + (isArticle ? classes.containerArticle : '')}>
				{isArticle &&
				<>
					<h1 className={classes.postHeader}>{title}</h1>
					<Divider className={classes.postDivider}/>
				</>
				}
				<div className={classes.bsPostViewContent} dangerouslySetInnerHTML={{__html: content}}></div>
			</Container>
		)
	});

}

export default ViewPost;