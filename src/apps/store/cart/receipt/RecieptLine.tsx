import { Box, Typography } from "@mui/material";

interface ReceiptLineProps {
	name: string;
	value: number | string;
}
export default function ReceiptLine({ name, value }: ReceiptLineProps) {
	return (
		<Box mb={1} display="flex" justifyContent="space-between">
			<Typography variant="subtitle2">{name}</Typography>
			<Typography variant="subtitle2">{value}</Typography>
		</Box>
	);
}
