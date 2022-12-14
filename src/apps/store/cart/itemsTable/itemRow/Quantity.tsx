import { Box, IconButton, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useAppDispatch } from "shared/redux/hook";
import { removeItem, updateItem } from "shared/redux/features/cart/asyncThunks";

interface ItemQuantityProps {
	cartItemId: number;
	name: string;
	count: number;
}
export default function ItemQuantity({
	cartItemId,
	name,
	count,
}: ItemQuantityProps) {
	const dispatch = useAppDispatch();

	const handleIncreament = () => {
		dispatch(
			updateItem({
				id: cartItemId,
				count: count + 1,
			})
		);
	};

	const handleDecreament = () => {
		count > 1
			? dispatch(
					updateItem({
						id: cartItemId,
						count: count - 1,
					})
			  )
			: dispatch(removeItem({ id: cartItemId, name: name }));
	};

	return (
		<Box display="flex" justifyContent="space-around" alignItems="center">
			<IconButton onClick={handleDecreament} size="small">
				<Remove fontSize="small" />
			</IconButton>

			<Typography>{count}</Typography>

			<IconButton onClick={handleIncreament} size="small">
				<Add fontSize="small" />
			</IconButton>
		</Box>
	);
}
