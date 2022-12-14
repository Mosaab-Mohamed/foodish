import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import {
	Container,
	GridContainer,
	GridItem,
	Space,
	Alert,
	Empty,
	Helmet,
} from "store/components";
import { ArrowBack } from "@mui/icons-material";
import urls from "shared/helpers/urls";
import Banner from "./banner/Banner";
import ItemsTable from "./itemsTable/ItemsTable";
import Receipt from "./receipt/Receipt";
import { useAppDispatch, useAppSelector } from "shared/redux/hook";
import { resetMessage } from "shared/redux/features/cart/cartSlice";
import classes from "./style.module.scss";

export default function Cart() {
	const dispatch = useAppDispatch();
	const { list, message, status } = useAppSelector((state) => state.cart);

	useEffect(() => {
		return () => {
			dispatch(resetMessage());
		};
	}, []);

	return (
		<Box className={classes.cart}>
			<Helmet title="Cart" />
			<Banner />
			<Space />
			<Container>
				<GridContainer spacing={3}>
					<GridItem lg={9}>
						<ItemsTable />
					</GridItem>
					<GridItem lg={3}>
						<Receipt />
					</GridItem>
				</GridContainer>
				<Empty show={list.length < 1} text="Empty Cart">
					<Link to={urls.store.home}>
						<Button startIcon={<ArrowBack />}>Go Shopping</Button>
					</Link>
				</Empty>
			</Container>
			<Space />
			<Alert
				show={Boolean(message)}
				severity={status === "success" ? "success" : "error"}
				text={message as string}
				close={() => dispatch(resetMessage())}
			/>
		</Box>
	);
}
