import { Box, Chip, Typography } from "@mui/material";

interface PriceProps {
	price: number;
	discount: number | null;
}

export default function Price({ price, discount }: PriceProps) {
	if (!discount) return <Typography pb={1}>{price}$</Typography>;

	const finalPrice = price - (price * discount) / 100;
	return (
		<Box pb={1} display="flex" justifyContent="space-between">
			<Box display="flex" alignItems="center">
				<Typography
					variant="body2"
					sx={{ textDecoration: "line-through", margin: "0 5px" }}
					color="GrayText"
				>
					{price}$
				</Typography>
				<Typography style={{ margin: "0 5px" }}>{finalPrice}$</Typography>
			</Box>
			<Chip label={`${discount}%`} color="primary" size="small" />
		</Box>
	);
}
