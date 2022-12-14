import { Box, Typography } from "@mui/material";
import { LibraryBooks } from "@mui/icons-material";
import { Breadcrumbs, Container } from "store/components";
import { orders_banner } from "shared/assets/images";

export default function Banner() {
	return (
		<Box className="banner" sx={{ backgroundImage: `url(${orders_banner})` }}>
			<Container>
				<Breadcrumbs
					current={{
						text: "Orders",
						icon: <LibraryBooks />,
					}}
					sx={{ color: "white" }}
				/>
				<Typography variant="h3" className="banner_text">
					My Orders
				</Typography>
			</Container>
		</Box>
	);
}
