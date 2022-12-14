import { Phone } from "@mui/icons-material";
import { Banner as PageBanner } from "store/components";
import { contact_banner } from "shared/assets/images";

export default function Banner() {
	return (
		<PageBanner
			backgroundImg={contact_banner}
			breadcrumbs={{
				current: {
					text: "Contact",
					icon: <Phone />,
				},
			}}
			pageName="Contact Us"
		/>
	);
}
