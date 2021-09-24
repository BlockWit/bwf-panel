import React from "react";
import {Chip} from "@material-ui/core";
import {Done} from "@material-ui/icons";

const PS_PUBLISHED = "PUBLISHED";
const PS_DRAFT = "DRAFT";

const PostStatus = ({value}) => {

	if (value === PS_PUBLISHED)
		return <Chip color="primary" size="small" variant="outlined" icon={<Done/>} label="published"/>
	if (value === PS_DRAFT)
		return <Chip size="small" variant="outlined" icon={<Done/>} label="published"/>

	return <Chip color="secondary" size="small" variant="outlined" label="undetermined"/>

}

export default PostStatus;