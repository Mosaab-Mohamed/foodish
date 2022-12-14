import { Step, StepLabel, Stepper as MuiStepper } from "@mui/material";
import { useAppSelector } from "shared/redux/hook";
import StepIcon from "./StepIcon";

const statuses: { [key: string]: number } = {
	received: 0,
	under_preparing: 1,
	on_way: 2,
	delivered: 3,
};

export default function Stepper() {
	const { order } = useAppSelector((state) => state.orders);
	const activeStep = statuses[order?.status as string];

	return (
		<MuiStepper activeStep={activeStep} alternativeLabel>
			<Step completed>
				<StepLabel StepIconComponent={StepIcon}>Received</StepLabel>
			</Step>
			<Step>
				<StepLabel StepIconComponent={StepIcon}>Under Prepration</StepLabel>
			</Step>
			<Step>
				<StepLabel StepIconComponent={StepIcon}>On The Way</StepLabel>
			</Step>
			<Step completed={activeStep === 3}>
				<StepLabel StepIconComponent={StepIcon}>Delivered</StepLabel>
			</Step>
		</MuiStepper>
	);
}
