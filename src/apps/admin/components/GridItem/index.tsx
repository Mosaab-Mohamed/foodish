import { Grid } from "@mui/material";
import { GridProps } from "@mui/material";

export function GridItem(props: GridProps) {
	return (
		<Grid item {...props}>
			{props.children}
		</Grid>
	);
}
