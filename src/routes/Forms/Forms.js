import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignInSide(props) {
	const classes = useStyles();
	const formName = () => {
		switch (props.location.search) {
			case '?signup': {
				return 'Sign up';
			}
			case '?login': {
				return 'Sign in';
			}
			default: {
				console.log('unkown form');
			}
		}
	}
	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						{formName()}
					</Typography>
					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
							{formName() === 'Sign up' && <React.Fragment>
								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete="fname"
										name="firstName"
										variant="outlined"
										required
										fullWidth
										id="firstName"
										label="First Name"
										autoFocus
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="lastName"
										label="Last Name"
										name="lastName"
										autoComplete="lname"
									/>
								</Grid>
							</React.Fragment>}
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									autoFocus={formName() === 'Sign in'}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="current-password"
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={<Checkbox value={formName() === 'Sign up' ? "allowExtraEmails" : "remember"} color="primary" />}
									label={formName() === 'Sign up' ? "I want to receive inspiration, marketing promotions and updates via email." : "Remember me"}
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							{formName().toUpperCase()}
						</Button>
						{formName() === 'Sign up' && <React.Fragment>
							<Grid container justify="flex-end">
								<Grid item>
									<Link href="/forms?login" variant="body2">
										Already have an account? Sign in
              </Link>
								</Grid>
							</Grid>
						</React.Fragment>}
						{formName() === 'Sign in' && <React.Fragment>
							<Grid container>
								<Grid item xs>
									<Link href="#" variant="body2">
										Forgot password?
              </Link>
								</Grid>
								<Grid item>
									<Link href="/forms?signup" variant="body2">
										Don't have an account? Sign Up
								</Link>
								</Grid>
							</Grid>
						</React.Fragment>}
					</form>
				</div>
			</Grid>
		</Grid>
	);
}