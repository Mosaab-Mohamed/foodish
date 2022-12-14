import { Box, StepIconProps } from "@mui/material";
import { under_prepare, on_way, delivered, done } from "shared/assets/images";

const icons: { [key: string]: string } = {
	1: done,
	2: under_prepare,
	3: on_way,
	4: delivered,
};
export default function StepIcon(props: StepIconProps) {
	const { completed, active, icon } = props;

	return (
		<Box className={`step_icon ${completed ? "completed" : ""}`}>
			<img
				src={completed ? done : icons[String(icon)]}
				alt="step_icon"
				style={{
					filter: completed || active ? "none" : "grayscale(1) ",
				}}
			/>
		</Box>
	);
}
