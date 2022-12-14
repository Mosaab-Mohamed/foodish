import { Box, StepIconProps } from "@mui/material";
import {
	contact_info,
	review_order,
	confirm_order,
} from "shared/assets/images";

const icons: { [key: string]: string } = {
	1: contact_info,
	2: review_order,
	3: confirm_order,
};
export default function StepIcon(props: StepIconProps) {
	const { completed, active, icon } = props;

	return (
		<Box className="step_icon">
			<img
				src={icons[String(icon)]}
				alt="step_icon"
				style={{
					filter: completed || active ? "none" : "grayscale(1) ",
				}}
			/>
		</Box>
	);
}
