import React from "react";
import {Container} from "@material-ui/core";
import usePerformSingleQueryComponent from "../../../hooks/common/usePerformSingleQueryComponent";
import useFrontFetchConfig from "../../../hooks/front/useFrontFetchConfig";
import notExists from "../../../utils/notExist";
import ViewPost from "../ViewPost/ViewPost";

const ViewHomePage = (props) => usePerformSingleQueryComponent(useFrontFetchConfig, data => {

	const {mainPageId} = data;

	if (notExists(mainPageId))
		return <Container>Home page not selected</Container>

	return <ViewPost postId={mainPageId}/>

})

export default ViewHomePage;