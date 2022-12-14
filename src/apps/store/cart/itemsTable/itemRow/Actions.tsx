import { IconButton, Box, Tooltip } from "@mui/material";
import { Delete, LibraryAdd } from "@mui/icons-material";
import user from "shared/helpers/user";
import { useAppDispatch } from "shared/redux/hook";
import { removeItem, addItem } from "shared/redux/features/cart/asyncThunks";
import { CartItem } from "store/shared/types/cart";

export default function Actions({ cartItem }: { cartItem: CartItem }) {
	const dispatch = useAppDispatch();
	const userInfo = user.info();

	const handleAdding = () => {
		dispatch(
			addItem({
				userID: userInfo.id,
				item: cartItem.item,
				count: 1,
				size: cartItem.item.defaultSize,
				type: "regular",
			})
		);
	};

	const handleRemoving = () => {
		dispatch(
			removeItem({ id: cartItem.id as number, name: cartItem.item.name })
		);
	};

	return (
		<Box>
			<Tooltip title="Add another">
				<IconButton onClick={handleAdding}>
					<LibraryAdd fontSize="small" />
				</IconButton>
			</Tooltip>
			<Tooltip title="Remove">
				<IconButton onClick={handleRemoving}>
					<Delete fontSize="small" />
				</IconButton>
			</Tooltip>
		</Box>
	);
}
