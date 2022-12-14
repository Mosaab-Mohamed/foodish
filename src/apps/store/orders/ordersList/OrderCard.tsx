import { Link } from "react-router-dom";
import { Box, Button, Paper, Typography } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import urls from "shared/helpers/urls";
import { Order } from "store/shared/types/orders";
import { calcTotalPrice } from "store/cart/helpers";

export default function OrderCard({ order }: { order: Order }) {
	return (
		<Paper elevation={3} className="order_card">
			<Box className="boxed_line">
				<Typography variant="subtitle2">Order Number:</Typography>
				<Typography variant="body2">{order.id}</Typography>
			</Box>
			<Box className="boxed_line">
				<Typography variant="subtitle2">Date:</Typography>
				<Typography variant="body2">{order.date}</Typography>
			</Box>
			<Box className="boxed_line">
				<Typography variant="subtitle2">Status:</Typography>
				<Typography variant="body2">{order.status}</Typography>
			</Box>
			<Box className="boxed_line">
				<Typography variant="subtitle2">Total:</Typography>
				<Typography variant="body2">
					{calcTotalPrice(order.list)}$
				</Typography>
			</Box>
			<Box p={1} textAlign="center">
				<Link to={`${urls.store.orders}/${order.id}`}>
					<Button endIcon={<InfoOutlined />}>View</Button>
				</Link>
			</Box>
		</Paper>
	);
}
