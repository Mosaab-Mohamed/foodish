import { Box } from "@mui/material";
import { ShoppingCart, Receipt } from "@mui/icons-material";
import urls from "shared/helpers/urls";
import { Container, Space, Breadcrumbs, Helmet } from "store/components";
import CheckoutProvider from "./Context";
import Stepper from "./stepper/Stepper";
import Content from "./stepper/Content";
import classes from "./style.module.scss";

export default function Checkout() {
	return (
		<CheckoutProvider>
			<Box className={classes.checkout}>
				<Helmet title="Checkout" />
				<Container>
					<Breadcrumbs
						links={[
							{
								text: "Cart",
								value: urls.store.cart,
								icon: <ShoppingCart />,
							},
						]}
						current={{ text: "Checkout", icon: <Receipt /> }}
					/>
					<Space />
					<Stepper />
					<Space />
					<Content />
					<Space />
				</Container>
			</Box>
		</CheckoutProvider>
	);
}
