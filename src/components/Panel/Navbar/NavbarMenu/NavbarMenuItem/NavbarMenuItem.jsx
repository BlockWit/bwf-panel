import React from "react";
import {useHistory, useLocation} from "react-router-dom";
import {IconButton, makeStyles, Typography} from "@material-ui/core";
import {useIsAuthenticated} from "../../../../../hooks/useIsAuthenticated";

const useStyles = makeStyles((theme) => ({
	activeIconButton: {
		color: 'black',
	},
	inactiveIconButton: {},
}));

const NavbarMenuItem = ({auth = null, to, name, icon}) => {
	const classes = useStyles();
	const authenticated = useIsAuthenticated();
	const history = useHistory();
	const location = useLocation();

	if ((auth === true && !authenticated) || (auth === false && authenticated))
		return <></>

	const active = location.pathname === to;

	return (
		<IconButton color="inherit"
								className={active ? classes.activeIconButton : classes.inactiveIconButton}
								onClick={() => history.push(to)}
		>
			{icon}
			{name && <Typography variant='h6'>{name}</Typography>}
		</IconButton>
	);

}
export default NavbarMenuItem;