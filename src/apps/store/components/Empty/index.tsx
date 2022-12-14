import { Box, Typography } from "@mui/material";
import { noResults } from "shared/assets/images";

interface EmptyProps {
	show: boolean;
	text: string;
	children?: React.ReactNode;
}
export function Empty({ show, text, children }: EmptyProps) {
	if (!show) return null;
	return (
		<Box textAlign="center">
			<img src={noResults} alt="no results found" style={{ width: "35%" }} />
			<Typography variant="h6" gutterBottom>
				{text}
			</Typography>
			{children}
		</Box>
	);
}
