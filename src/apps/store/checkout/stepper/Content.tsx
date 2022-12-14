import { useContext } from "react";
import { Box } from "@mui/material";
import { CheckoutContext, CheckoutContextType } from "../Context";
import ContactForm from "../contactForm/ContactForm";
import ReviewOrder from "../reviewOrder/ReviewOrder";
import ConfirmOrder from "../ConfirmOrder";

const contents: { [key: string]: React.ReactNode } = {
	0: <ContactForm />,
	1: <ReviewOrder />,
	2: <ConfirmOrder />,
};

export default function Content() {
	const { activeStep } = useContext(CheckoutContext) as CheckoutContextType;

	return <Box>{contents[activeStep]}</Box>;
}
