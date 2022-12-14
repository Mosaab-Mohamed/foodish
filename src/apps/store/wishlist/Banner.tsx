import { Favorite } from "@mui/icons-material";
import { Banner as PageBanner } from "store/components";
import { wishlist_banner } from "shared/assets/images";

export default function Banner() {
	return (
		<PageBanner
			backgroundImg={wishlist_banner}
			breadcrumbs={{
				current: {
					text: "Wishlist",
					icon: <Favorite />,
				},
			}}
			pageName="Wishlist"
		/>
	);
}
