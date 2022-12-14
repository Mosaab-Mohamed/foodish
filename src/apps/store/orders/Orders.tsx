import { Box } from "@mui/material";
import { Space, Container, Helmet } from "store/components";
import Banner from "./banner/Banner";
import OrdersList from "./ordersList/OrdersList";

import classes from "./style.module.scss";

export default function Orders() {
	return (
		<Box className={classes.orders}>
			<Helmet title="Orders" />
			<Banner />
			<Space />
			<Container>
				<OrdersList />
				<Space />
			</Container>
		</Box>
	);
}
