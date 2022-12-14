import { useContext } from "react";
import { ChevronLeft } from "@mui/icons-material";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import user from "shared/helpers/user";
import { GridContainer, GridItem } from "store/components";
import { useAppDispatch, useAppSelector } from "shared/redux/hook";
import { CheckoutContext, CheckoutContextType } from "../Context";
import { createOrder } from "shared/redux/features/orders/ordersSlice";
import { resetCart } from "shared/redux/features/cart/asyncThunks";

export default function Controls() {
	const dispatch = useAppDispatch();
	const { contactInfo, setActiveStep } = useContext(
		CheckoutContext
	) as CheckoutContextType;
	const { list } = useAppSelector((state) => state.cart);
	const { isLoading } = useAppSelector((state) => state.orders);
	const userInfo = user.info();

	// Filter list to create order
	const orderList = list.map((item) => {
		const { id, userID, ...restProps } = item;
		return restProps;
	});

	const handleOrdering = async () => {
		await dispatch(
			createOrder({
				userID: userInfo.id,
				list: orderList,
				contactInfo,
				date: new Date().toLocaleString(),
				status: "received",
			})
		);
		dispatch(resetCart(list.map((ele) => ele.id as number)));
		setActiveStep((prev) => prev + 1);
	};

	return (
		<GridContainer justifyContent="space-between">
			<GridItem>
				<Button
					variant="contained"
					startIcon={<ChevronLeft />}
					onClick={() => setActiveStep((prev) => prev - 1)}
				>
					Back
				</Button>
			</GridItem>
			<GridItem>
				<LoadingButton
					loading={isLoading}
					variant="contained"
					onClick={handleOrdering}
				>
					Confirm
				</LoadingButton>
			</GridItem>
		</GridContainer>
	);
}
