import { useEffect } from "react";
import { Alert, GridContainer, GridItem, Space } from "store/components";
import { Item } from "store/shared/types/items";
import { LoadOrError, Empty, ItemCard } from "store/components";
import Pagination from "./Pagination";
import { useAppDispatch, useAppSelector } from "shared/redux/hook";
import { fetchItems } from "shared/redux/features/items/itemsSlice";
import { resetMessage as resetWishlistMessage } from "shared/redux/features/wishlist/wishlistSlice";
import { resetMessage as resetCartMessage } from "shared/redux/features/cart/cartSlice";

export default function ItemsList() {
	const dispatch = useAppDispatch();
	const { list, filters, pagination, error, isLoading } = useAppSelector(
		(state) => state.items
	);
	const { message: wishlistMessage, status: wishlistStatus } = useAppSelector(
		(state) => state.wishlist
	);
	const { message: cartMessage, status: cartStatus } = useAppSelector(
		(state) => state.cart
	);

	useEffect(() => {
		dispatch(
			fetchItems({
				...filters,
				_page: pagination._page,
				_limit: pagination._limit,
			})
		);

		// TODO: Investigate adding dispatch to arr dependencies
		// eslint-disable-next-line
	}, [filters, pagination]);

	useEffect(() => {
		return () => {
			dispatch(resetWishlistMessage());
			dispatch(resetCartMessage());
		};
	}, []);

	if (error || isLoading)
		return <LoadOrError error={error} isLoading={isLoading} />;

	return (
		<>
			<GridContainer spacing={3}>
				{list.map((item: Item) => (
					<GridItem md={6} key={item.id}>
						<ItemCard item={item} />
					</GridItem>
				))}
				<Empty show={list.length < 1} text="No Results Found" />
			</GridContainer>
			<Space />
			<Pagination />

			<Alert
				show={Boolean(wishlistMessage)}
				severity={wishlistStatus === "success" ? "success" : "error"}
				text={wishlistMessage as string}
				close={() => dispatch(resetWishlistMessage())}
			/>

			<Alert
				show={Boolean(cartMessage)}
				severity={cartStatus === "success" ? "success" : "error"}
				text={cartMessage as string}
				close={() => dispatch(resetCartMessage())}
			/>
		</>
	);
}
