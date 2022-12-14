import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "shared/redux/hook";
import { fetchOrders } from "shared/redux/features/orders/ordersSlice";
import { LoadOrError, Empty, GridContainer, GridItem } from "store/components";
import user from "shared/helpers/user";
import urls from "shared/helpers/urls";
import OrderCard from "./OrderCard";

export default function OrdersList() {
	const dispatch = useAppDispatch();
	const { list, isLoading, error } = useAppSelector((state) => state.orders);
	const userInfo = user.info();

	useEffect(() => {
		dispatch(fetchOrders(userInfo.id));
	}, []);

	if (isLoading || error)
		return <LoadOrError isLoading={isLoading} error={error} />;

	return (
		<GridContainer spacing={3}>
			{list.map((order) => (
				<GridItem md={4} key={order.id}>
					<OrderCard order={order} />
				</GridItem>
			))}
			<Empty show={list.length < 1} text="You haven't ordered yet">
				<Link to={urls.store.home}>
					<Button startIcon={<ArrowBack />}>Go Shopping</Button>
				</Link>
			</Empty>
		</GridContainer>
	);
}
