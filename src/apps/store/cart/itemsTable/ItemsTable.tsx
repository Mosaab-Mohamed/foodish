import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Paper,
} from "@mui/material";
import { OverlayLoader } from "store/components";
import { useAppSelector } from "shared/redux/hook";
import ItemRow from "./itemRow/Row";

export default function ItemsTable() {
	const { list, isLoading } = useAppSelector((state) => state.cart);

	if (list.length < 1) return null;
	return (
		<TableContainer className="items_table" component={Paper} elevation={4}>
			<OverlayLoader show={isLoading} />
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Item</TableCell>
						<TableCell>Quantity</TableCell>
						<TableCell>Size</TableCell>
						<TableCell>Type</TableCell>
						<TableCell>Price</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{list.map((item) => (
						<ItemRow key={item.id} item={item} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
