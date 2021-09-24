import React from "react";
import {Chip} from "@material-ui/core";
import {Description, MenuBook} from "@material-ui/icons";

const PT_ARTICLE = "ARTICLE";
const PT_PAGE = "PAGE";

const PostType = ({value}) => {

	if (value === PT_ARTICLE)
		return <Chip color="primary" size="small" variant="outlined" icon={<Description/>} label="article"/>
	if (value === PT_PAGE)
		return <Chip size="small" variant="outlined" icon={<MenuBook/>} label="page"/>

	return <Chip color="secondary" size="small" variant="outlined" label="undetermined"/>
}

export default PostType;