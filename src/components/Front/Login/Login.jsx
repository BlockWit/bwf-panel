import React, {useEffect, useState} from "react";
import {Button, Container, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../../../actions/auth";
import Loading from "../../common/Loading/Loading";
import {useHistory, useLocation} from "react-router-dom";
import {DEFAULT_AFTER_AUTH_URL} from "../../../config/appConfig";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(3),
	},
}));

const Login = (props) => {

	const classes = useStyles();

	const {authenticated, error, loading, fail} = useSelector(state => state.auth);

	const [credentials, setCredentials] = useState({
		login: '',
		password: ''
	});

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		if (event)
			event.preventDefault();
		dispatch(auth(credentials));
	}

	const onChange = ({target: {name, value}}) => {
		setCredentials({...credentials, [name]: value})
	}

	let errorMsg;
	if (fail)
		errorMsg = error || 'Wrong login or password';

	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		if (authenticated) {
			if (location.state && location.state.from) {
				history.push(location.state.from);
			} else {
				history.push(DEFAULT_AFTER_AUTH_URL);
			}
		}
	});

	if (authenticated) {
		return <Loading/>
	}

	return (
		<Container className={classes.container} maxWidth="xs">
			{loading ? <Loading/> :
				<>
					{errorMsg &&
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="h6" align="center" color="secondary">{errorMsg}</Typography>
						</Grid>
					</Grid>
					}
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="h6" align="center">Login</Typography>
						</Grid>
					</Grid>
					<form noValidate autoComplete="off" onSubmit={onSubmit}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<TextField
											id="login"
											name='login'
											fullWidth
											size='small'
											label="Login"
											variant="outlined"
											value={credentials.login}
											onChange={onChange}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											id="password"
											name='password'
											fullWidth
											size="small"
											label="Password"
											type="password"
											variant="outlined"
											value={credentials.password}
											onChange={onChange}
											autoComplete="on"
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12}>
								<Button color="primary" fullWidth type="submit" variant="contained">
									Log in
								</Button>
							</Grid>
						</Grid>
					</form>
				</>
			}
		</Container>
	);

};

export default Login;