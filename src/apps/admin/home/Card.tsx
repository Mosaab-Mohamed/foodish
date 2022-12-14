import { Link } from "react-router-dom";
import { Card as MuiCard, Box, Typography, Button } from "@mui/material";
import classes from "./style.module.scss";

interface CardProps {
	RGBcolor: string;
	number: number;
	title: string;
	link: string;
	Icon: React.ElementType;
}

export default function Card(props: CardProps) {
	const { RGBcolor, number, title, link, Icon } = props;
	return (
		<Link to={link}>
			<MuiCard className={classes.card} elevation={3}>
				<Box
					className="icon"
					sx={{
						backgroundColor: `rgb(${RGBcolor} / 20%)`,
						color: `rgb(${RGBcolor})`,
					}}
				>
					{<Icon fontSize="small" />}
				</Box>
				<Typography variant="h4">{number}</Typography>
				<Typography variant="subtitle1" gutterBottom>
					{title}
				</Typography>
			</MuiCard>
		</Link>
	);
}
