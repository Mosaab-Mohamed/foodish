import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Info, Home } from "@mui/icons-material";
import urls from "shared/helpers/urls";
import { useAppSelector } from "shared/redux/hook";
import { order_confirmed } from "shared/assets/images";

export default function ConfirmOrder() {
	const { lastCreated } = useAppSelector((state) => state.orders);

	return (
		<Box width="30%" m="-40px auto 0">
			<img src={order_confirmed} alt="confirmed" style={{ width: "100%" }} />
			<Box display="flex" justifyContent="space-around">
				<Link to={`${urls.store.home}`}>
					<Button variant="outlined" startIcon={<Home />}>
						Go home
					</Button>
				</Link>
				<Link to={`${urls.store.orders}/${lastCreated}`}>
					<Button variant="outlined" startIcon={<Info />}>
						View order
					</Button>
				</Link>
			</Box>
		</Box>
	);
}
