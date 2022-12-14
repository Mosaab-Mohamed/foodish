import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Container, LoadOrError, Space } from "store/components";
import { fetchOrder } from "shared/redux/features/orders/ordersSlice";
import { useAppDispatch, useAppSelector } from "shared/redux/hook";
import Stepper from "./Stepper";
import ItemsTable from "./ItemsTable";
import classes from "../style.module.scss";

export default function ViewOrder() {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { isLoading, error } = useAppSelector((state) => state.orders);

	useEffect(() => {
		dispatch(fetchOrder(Number(id as string)));

		// eslint-disable-next-line
	}, []);

	if (error || isLoading)
		return <LoadOrError isLoading={isLoading} error={error} />;

	return (
		<Box className={classes.view_order}>
			<Space />
			<Stepper />
			<Space />
			<Container>
				<ItemsTable />
			</Container>
		</Box>
	);
}
