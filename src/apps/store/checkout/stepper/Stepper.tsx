import { useContext } from "react";
import { Stepper as MuiStepper, Step, StepLabel } from "@mui/material";
import { CheckoutContext, CheckoutContextType } from "../Context";

export default function Stepper() {
	const { activeStep } = useContext(CheckoutContext) as CheckoutContextType;

	return (
		<MuiStepper activeStep={activeStep} alternativeLabel>
			<Step>
				<StepLabel>Enter Contact Info</StepLabel>
			</Step>
			<Step>
				<StepLabel>Review Order</StepLabel>
			</Step>
			<Step completed={activeStep === 2}>
				<StepLabel>Confirm Order</StepLabel>
			</Step>
		</MuiStepper>
	);
}
