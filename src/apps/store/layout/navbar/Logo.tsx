import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { logo } from "shared/assets/images";
import urls from "shared/helpers/urls";

export default function Logo() {
	return (
		<Link to={urls.store.home} className="logo">
			<img src={logo} alt="logo" />
			<Typography variant="h6" className="font__Marck">
				Foodish
			</Typography>
		</Link>
	);
}
