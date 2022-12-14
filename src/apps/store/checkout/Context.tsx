import { createContext, useState } from "react";
import { ContactInfo, initialValues } from "./contactForm/helpers";

export interface CheckoutContextType {
	activeStep: number;
	setActiveStep: React.Dispatch<React.SetStateAction<number>>;
	contactInfo: ContactInfo;
	setContactInfo: React.Dispatch<React.SetStateAction<ContactInfo>>;
}

export const CheckoutContext = createContext<CheckoutContextType | null>(null);

export default function CheckoutProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [activeStep, setActiveStep] = useState<number>(0);
	const [contactInfo, setContactInfo] = useState<ContactInfo>(initialValues);

	return (
		<CheckoutContext.Provider
			value={{ activeStep, setActiveStep, contactInfo, setContactInfo }}
		>
			{children}
		</CheckoutContext.Provider>
	);
}
