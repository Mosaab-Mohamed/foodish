import { Favorite } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Item } from "store/shared/types/items";
import user from "shared/helpers/user";
import { useAppDispatch, useAppSelector } from "shared/redux/hook";
import {
	addToWishlist,
	removeFromWishlist,
} from "shared/redux/features/wishlist/wishlistSlice";

interface WishlistButtonProps {
	item: Item;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WishlistButton({
	item,
	setIsLoading,
}: WishlistButtonProps) {
	const dispatch = useAppDispatch();
	const { list } = useAppSelector((state) => state.wishlist);

	const listItem = list.find((listItem) => listItem.item.id === item.id);
	const inWishlist = Boolean(listItem);
	const userInfo = user.info();

	const handleClick = () => {
		setIsLoading(true);
		setTimeout(async () => {
			!inWishlist
				? await dispatch(addToWishlist({ item, userID: userInfo.id }))
				: await dispatch(
						removeFromWishlist({
							id: listItem?.id as number,
							name: item.name,
						})
				  );
			setIsLoading(false);
		}, 500);
	};

	return (
		<IconButton onClick={handleClick}>
			<Favorite color={inWishlist ? "primary" : "action"} />
		</IconButton>
	);
}
