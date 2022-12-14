import { Box, CircularProgress, CircularProgressProps } from "@mui/material";
import classes from "./style.module.scss";

interface OverlayLoaderProps {
	show: boolean;
	spinner?: CircularProgressProps;
}

export function OverlayLoader({ show, spinner }: OverlayLoaderProps) {
	if (!show) return null;
	return (
		<Box className={classes.overlayLoader}>
			<CircularProgress size={40} {...spinner} />
		</Box>
	);
}
