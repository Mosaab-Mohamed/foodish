import { Link } from "react-router-dom";
import {
	Breadcrumbs as MuiBreadcrumbs,
	BreadcrumbsProps as MuiBreadcrumbsProps,
	Typography,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import urls from "shared/helpers/urls";
import classes from "./style.module.scss";

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {
	links?: {
		text: string;
		value: string;
		icon?: React.ReactNode;
	}[];
	current: {
		text: string;
		icon?: React.ReactNode;
	};
}

export function Breadcrumbs({ links, current, ...props }: BreadcrumbsProps) {
	return (
		<MuiBreadcrumbs
			className={classes.breadcrumbs}
			aria-label="breadcrumb"
			{...props}
		>
			<Link to={urls.store.home}>
				<Home />
				Home
			</Link>

			{links?.map((link, index) => (
				<Link key={index} to={link.value}>
					{link.icon}
					{link.text}
				</Link>
			))}

			<Typography>
				{current.icon}
				{current.text}
			</Typography>
		</MuiBreadcrumbs>
	);
}
