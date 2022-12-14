import { Box } from "@mui/material";

interface SpaceProps {
	distance?: number;
}

export function Space({ distance = 50 }: SpaceProps) {
	return <Box height={`${distance}px`} />;
}
