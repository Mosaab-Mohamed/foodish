import { ShoppingCart } from "@mui/icons-material";
import { Banner as PageBanner } from "store/components";
import { cart_banner } from "shared/assets/images";

export default function Banner() {
	return (
		<PageBanner
			backgroundImg={cart_banner}
			breadcrumbs={{
				current: {
					text: "Cart",
					icon: <ShoppingCart />,
				},
			}}
			pageName="Cart"
		/>
	);
}
