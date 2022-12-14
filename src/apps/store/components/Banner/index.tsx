import { Box, Typography } from "@mui/material";
import { Breadcrumbs, Container } from "store/components";
import { BreadcrumbsProps } from "../Breadcrumbs";
import classes from "./style.module.scss";

interface BannerProps {
	backgroundImg: string;
	pageName: string;
	breadcrumbs: BreadcrumbsProps;
}

export function Banner(props: BannerProps) {
	const { backgroundImg, breadcrumbs, pageName } = props;
	return (
		<Box
			className={classes.banner}
			sx={{ backgroundImage: `url(${backgroundImg})` }}
		>
			<Container>
				<Breadcrumbs
					links={breadcrumbs.links}
					current={breadcrumbs.current}
				/>
				<Typography variant="h3" className="banner_text">
					{pageName}
				</Typography>
			</Container>
		</Box>
	);
}
