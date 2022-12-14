import { Box, Typography } from "@mui/material";
import { logo, auth_banner } from "shared/assets/images";

export function Banner() {
	return (
		<Box className="auth__banner">
			<img src={logo} alt="logo" className="logo" />
			<Typography variant="h4" color="primary" className="font__Marck">
				Foodish
			</Typography>
			<img src={auth_banner} alt="banner" className="banner" />
		</Box>
	);
}
