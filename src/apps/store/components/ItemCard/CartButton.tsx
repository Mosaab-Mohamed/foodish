import React from "react";
import { Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Item } from "store/shared/types/items";
import user from "shared/helpers/user";
import { useAppSelector, useAppDispatch } from "shared/redux/hook";
import {
	addItem,
	updateItem,
	removeItem,
} from "shared/redux/features/cart/asyncThunks";

interface CartButtonProps {
	item: Item;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CartButton({ item, setIsLoading }: CartButtonProps) {
	const dispatch = useAppDispatch();
	const { list } = useAppSelector((state) => state.cart);

	const cartItem = list.find((cartItem) => cartItem.item.id === item.id);
	const inCart = Boolean(cartItem);
	const cartItemId = cartItem?.id as number;
	const cartItemCount = cartItem?.count as number;
	const userInfo = user.info();

	const handleAdding = () => {
		setIsLoading(true);
		setTimeout(async () => {
			await dispatch(
				addItem({
					item,
					userID: userInfo.id,
					count: 1,
					size: item.defaultSize,
					type: "regular",
				})
			);
			setIsLoading(false);
		}, 500);
	};

	const handleIncreament = () => {
		setIsLoading(true);
		setTimeout(async () => {
			await dispatch(
				updateItem({
					id: cartItemId,
					count: cartItemCount + 1,
				})
			);
			setIsLoading(false);
		}, 500);
	};

	const handleDecreament = () => {
		setIsLoading(true);
		setTimeout(async () => {
			cartItemCount > 1
				? await dispatch(
						updateItem({
							id: cartItemId,
							count: cartItemCount - 1,
						})
				  )
				: await dispatch(removeItem({ id: cartItemId, name: item.name }));
			setIsLoading(false);
		}, 500);
	};

	return !inCart ? (
		<Button
			sx={{ flex: 1 }}
			variant="contained"
			endIcon={<ShoppingCart />}
			onClick={handleAdding}
		>
			Add To Cart
		</Button>
	) : (
		<>
			<Button variant="contained" onClick={handleDecreament}>
				-
			</Button>
			<Typography sx={{ flex: 1 }} textAlign="center">
				{`${cartItemCount} in cart`}
			</Typography>
			<Button variant="contained" onClick={handleIncreament}>
				+
			</Button>
		</>
	);
}
