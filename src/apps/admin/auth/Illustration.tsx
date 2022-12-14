import { Paper, Typography, Box } from "@mui/material";
import { logo, illustration_login } from "shared/assets/images";
import classes from "./style.module.scss";

export default function Illustration() {
	return (
		<Paper square elevation={5} className={classes.illustration}>
			<img src={logo} className="logo" alt="logo" />
			<Typography variant="h5">Hi, welcome back</Typography>
			<img
				src={illustration_login}
				className="illustration__img"
				alt="illustration_login"
			/>
		</Paper>
	);
}
