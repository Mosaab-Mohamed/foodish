import { Grid } from "@mui/material";
import { GridProps } from "@mui/material";

export function GridContainer(props: GridProps) {
	return (
		<Grid container spacing={1} {...props}>
			{props.children}
		</Grid>
	);
}
