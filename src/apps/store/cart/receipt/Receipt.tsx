import { Link } from "react-router-dom";
import { Paper, Box, Typography, Divider, Button } from "@mui/material";
import urls from "shared/helpers/urls";
import { OverlayLoader } from "store/components";
import { useAppSelector } from "shared/redux/hook";
import { calcItemPrice } from "../helpers";
import ReceiptLine from "./RecieptLine";

export default function Receipt() {
	const { list, isLoading } = useAppSelector((state) => state.cart);

	const itemsCount = list.reduce((prev, current) => prev + current.count, 0);
	const itemsPrice = list.reduce(
		(prev, current) => prev + calcItemPrice(current),
		0
	);
	const taxs = Number(((itemsPrice * 14) / 100).toFixed(2));
	const deleivery = 10;
	const total = Number((itemsPrice + taxs + deleivery).toFixed(2));

	if (list.length < 1) return null;
	return (
		<Paper elevation={4} sx={{ position: "relative" }}>
			<OverlayLoader show={isLoading} />
			<Box p={2} textAlign="center">
				<Typography>Receipt</Typography>
			</Box>
			<Divider />
			<Box p={2}>
				<ReceiptLine name="Items Price" value={`${itemsPrice}$`} />
				<ReceiptLine name="Taxs" value={`${taxs}$`} />
				<ReceiptLine name="Deleivery" value={"10$"} />
			</Box>
			<Divider />
			<Box p={2}>
				<ReceiptLine name="Items Count" value={itemsCount} />
				<ReceiptLine name="Total" value={`${total}$`} />
			</Box>
			<Box>
				<Link to={urls.store.checkout}>
					<Button fullWidth variant="contained">
						Proceed
					</Button>
				</Link>
			</Box>
		</Paper>
	);
}
