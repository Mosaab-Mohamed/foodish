import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { home_banner } from "shared/assets/images";
import classes from "./style.module.scss";

export default function Banner() {
	const { t } = useTranslation();
	return (
		<>
			<Box className={classes.banner}>
				<img
					src={home_banner}
					alt="home-banner"
					className={classes.banner_img}
				/>
				<Typography variant="h3" className="banner_text" color="azure">
					{t("welcomeStatement")}
				</Typography>
			</Box>
		</>
	);
}
