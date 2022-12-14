import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import {
	ItemCard,
	Alert,
	Container,
	GridContainer,
	GridItem,
	Space,
	Empty,
	LoadOrError,
	Helmet,
} from "store/components";
import urls from "shared/helpers/urls";
import Banner from "./Banner";
import { useAppSelector, useAppDispatch } from "shared/redux/hook";
import { resetMessage as resetWishlistMessage } from "shared/redux/features/wishlist/wishlistSlice";
import { resetMessage as resetCartMessage } from "shared/redux/features/cart/cartSlice";

export default function Wishlist() {
	const dispatch = useAppDispatch();
	const {
		list,
		isLoading,
		error,
		message: wishlistMessage,
		status: wishlistStatus,
	} = useAppSelector((state) => state.wishlist);
	const { message: cartMessage, status: cartStatus } = useAppSelector(
		(state) => state.cart
	);

	useEffect(() => {
		return () => {
			dispatch(resetWishlistMessage());
			dispatch(resetCartMessage());
		};
	}, []);

	if (isLoading || error)
		return <LoadOrError isLoading={isLoading} error={error} />;
	return (
		<Box>
			<Helmet title="Wishlist" />
			<Banner />
			<Space />
			<Container>
				<GridContainer spacing={3}>
					{list.map((ele) => (
						<GridItem key={ele.id} md={4}>
							<ItemCard item={ele.item} />
						</GridItem>
					))}
				</GridContainer>
				<Empty show={list.length < 1} text="Empty Wishlist">
					<Link to={urls.store.home}>
						<Button startIcon={<ArrowBack />}>Go Shopping</Button>
					</Link>
				</Empty>
			</Container>
			<Space />
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
		</Box>
	);
}
