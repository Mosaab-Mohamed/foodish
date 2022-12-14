import { FilterAlt } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function FilterHeader() {
	return (
		<Box
			display="flex"
			justifyContent="space-between"
			sx={{ padding: "10px" }}
		>
			<Typography variant="body1">Filters</Typography>
			<FilterAlt color="primary" />
		</Box>
	);
}
