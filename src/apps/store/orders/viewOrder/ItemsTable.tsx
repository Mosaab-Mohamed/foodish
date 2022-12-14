import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Paper,
	Typography,
} from "@mui/material";
import { calcItemPrice } from "store/cart/helpers";
import { useAppSelector } from "shared/redux/hook";

export default function ItemsTable() {
	const { order } = useAppSelector((state) => state.orders);

	return (
		<TableContainer className="items_table" component={Paper} elevation={4}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Item</TableCell>
						<TableCell>Quantity</TableCell>
						<TableCell>Size</TableCell>
						<TableCell>Type</TableCell>
						<TableCell>Price</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{order?.list.map((item, index) => (
						<TableRow key={index}>
							<TableCell>
								<Typography variant="subtitle2">
									{item.item.name}
								</Typography>
							</TableCell>
							<TableCell>{item.count}</TableCell>
							<TableCell>{item.size}</TableCell>
							<TableCell>{item.type}</TableCell>
							<TableCell>{calcItemPrice(item)}$</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
